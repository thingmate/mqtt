import { Abortable, AsyncTask, IAsyncTaskErrorFunction, IAsyncTaskSuccessFunction } from '@lirx/async-task';
import { IPurePushSinkWithBackPressure, IPushSourceWithBackPressure } from '@lirx/stream';
import { QOS } from '../../../../../constants/qos.enum';
import {
  IReadonlyMqttPublishPacket,
} from '../../../../../packets/built-in/03-mqtt-publish-packet/readonly/readonly-mqtt-publish-packet.type';
import { isMqttPubackPacket } from '../../../../../packets/built-in/04-mqtt-puback-packet/constants/is-mqtt-puback-packet';
import { IReadonlyMqttPubackPacket } from '../../../../../packets/built-in/04-mqtt-puback-packet/readonly/readonly-mqtt-puback-packet.type';
import { isMqttPubrecPacket } from '../../../../../packets/built-in/05-mqtt-pubrec-packet/constants/is-mqtt-pubrec-packet';
import { IReadonlyMqttPubrecPacket } from '../../../../../packets/built-in/05-mqtt-pubrec-packet/readonly/readonly-mqtt-pubrec-packet.type';
import {
  createReadonlyMqttPubrelPacket,
} from '../../../../../packets/built-in/06-mqtt-pubrel-packet/readonly/implementations/create-readonly-mqtt-pubrel-packet';
import { IReadonlyMqttPubrelPacket } from '../../../../../packets/built-in/06-mqtt-pubrel-packet/readonly/readonly-mqtt-pubrel-packet.type';
import { isMqttPubcompPacket } from '../../../../../packets/built-in/07-mqtt-pubcomp-packet/constants/is-mqtt-pubcomp-packet';
import {
  IReadonlyMqttPubcompPacket,
} from '../../../../../packets/built-in/07-mqtt-pubcomp-packet/readonly/readonly-mqtt-pubcomp-packet.type';
import { IMqttPacketIdManager } from '../../../../../packets/components/mqtt-packet-id-manager/mqtt-packet-id-manager.type';
import { IReadonlyMqttPacketId } from '../../../../../packets/components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT,
} from '../../../../../packets/components/mqtt-packet-property-list/readonly/constants/empty-readonly-mqtt-packet-property-list.constant';
import {
  PUBACK_REASON_CODE,
} from '../../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/04-puback/puback-reason-code.enum';
import {
  PUBREC_REASON_CODE,
} from '../../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/05-pubrec/pubrec-reason-code.enum';
import {
  STATIC_MQTT_PACKET_PUBREL_REASON_SUCCESS,
} from '../../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/06-pubrel/static-mqtt-packet-pubrel-reason-success.constant';
import {
  PUBCOMP_REASON_CODE,
} from '../../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/07-pubcomp/pubcomp-reason-code.enum';

import { IGenericMqttPacket } from '../../../../../packets/components/mqtt-packet/mqtt-packet.type';
import { createPublishErrorFromMqttPubackPacket } from '../../../errors/publish-error/create-publish-error-from-mqtt-puback-packet';
import { createPublishErrorFromMqttPubcompPacket } from '../../../errors/publish-error/create-publish-error-from-mqtt-pubcomp-packet';
import { createPublishErrorFromMqttPubrecPacket } from '../../../errors/publish-error/create-publish-error-from-mqtt-pubrec-packet';
import {
  IAdvancedMqttClientPublishFunction,
  IAdvancedMqttClientPublishFunctionResult,
  IMqttPubrecAndPubcompPacketPair,
} from '../../../traits/publish/advanced-mqtt-client.publish.function-definition';
import { pushSourceWithBackPressureToAsyncTask } from '../../functions/push-source-with-back-pressure-to-async-task';

export interface ICreateAdvancedMqttClientPublishFunctionOptions {
  readonly input$: IPushSourceWithBackPressure<IGenericMqttPacket>;
  readonly $output: IPurePushSinkWithBackPressure<IGenericMqttPacket>;
  readonly packetIdManager: IMqttPacketIdManager;
}

export function createAdvancedMqttClientPublishFunction(
  {
    input$,
    $output,
    packetIdManager,
  }: ICreateAdvancedMqttClientPublishFunctionOptions,
): IAdvancedMqttClientPublishFunction {
  return (
    publishPacket: IReadonlyMqttPublishPacket,
    abortable: Abortable,
  ): AsyncTask<IAdvancedMqttClientPublishFunctionResult> => {
    const qos: QOS = publishPacket.getQoS();
    const packetId: IReadonlyMqttPacketId | undefined = publishPacket.getPacketId();

    if (packetId !== void 0) {
      packetIdManager.add(packetId);
    }

    const getAtMostOnceResponsePromise = (
      abortable: Abortable,
    ): AsyncTask<null> => {
      return AsyncTask.success(null, abortable);
    };

    const getAtLeastOnceResponsePromise = (
      abortable: Abortable,
    ): AsyncTask<IReadonlyMqttPubackPacket> => {
      return pushSourceWithBackPressureToAsyncTask((
        packet: IGenericMqttPacket,
        success: IAsyncTaskSuccessFunction<IReadonlyMqttPubackPacket>,
        error: IAsyncTaskErrorFunction,
      ): void => {
        if (
          isMqttPubackPacket(packet)
          && (packet.getPacketId().get() === packetId!.get())
        ) {
          if (packet.getReason().getCode() === PUBACK_REASON_CODE.SUCCESS) {
            success(packet);
          } else {
            error(createPublishErrorFromMqttPubackPacket(packet));
          }
        }
      }, input$, abortable);
    };

    const getExactlyOnceResponsePromise = (
      abortable: Abortable,
    ): AsyncTask<IMqttPubrecAndPubcompPacketPair> => {

      const getUntilMqttPubrecPacket = (
        abortable: Abortable,
      ): AsyncTask<IReadonlyMqttPubrecPacket> => {
        return pushSourceWithBackPressureToAsyncTask((
          packet: IGenericMqttPacket,
          success: IAsyncTaskSuccessFunction<IReadonlyMqttPubrecPacket>,
          error: IAsyncTaskErrorFunction,
        ): void => {
          if (isMqttPubrecPacket(packet)) {
            if (packet.getPacketId().get() === packetId!.get()) {
              if (packet.getReason().getCode() === PUBREC_REASON_CODE.SUCCESS) {
                success(packet);
              } else {
                error(createPublishErrorFromMqttPubrecPacket(packet));
              }
            }
          }
        }, input$, abortable);
      };

      const getUntilMqttPubcompPacket = (
        abortable: Abortable,
      ): AsyncTask<IReadonlyMqttPubcompPacket> => {
        return pushSourceWithBackPressureToAsyncTask((
          packet: IGenericMqttPacket,
          success: IAsyncTaskSuccessFunction<IReadonlyMqttPubcompPacket>,
          error: IAsyncTaskErrorFunction,
        ): void => {
          if (isMqttPubcompPacket(packet)) {
            if (packet.getPacketId().get() === packetId!.get()) {
              if (packet.getReason().getCode() === PUBCOMP_REASON_CODE.SUCCESS) {
                success(packet);
              } else {
                error(createPublishErrorFromMqttPubcompPacket(packet));
              }
            }
          }
        }, input$, abortable);
      };

      const untilMqttPubrecPacket = getUntilMqttPubrecPacket(abortable);
      const untilMqttPubcompPacket = getUntilMqttPubcompPacket(abortable);

      return untilMqttPubrecPacket
        .successful((
          mqttPubrecPacket: IReadonlyMqttPubrecPacket,
        ): AsyncTask<IMqttPubrecAndPubcompPacketPair> => {
          const mqttPubrelPacket: IReadonlyMqttPubrelPacket = createReadonlyMqttPubrelPacket({
            packetId: packetId!,
            reason: STATIC_MQTT_PACKET_PUBREL_REASON_SUCCESS,
            properties: EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT,
          });
          return $output(mqttPubrelPacket, abortable)
            .successful((): AsyncTask<IMqttPubrecAndPubcompPacketPair> => {
              return untilMqttPubcompPacket
                .successful((
                  mqttPubcompPacket: IReadonlyMqttPubcompPacket,
                ): IMqttPubrecAndPubcompPacketPair => {
                  return [
                    mqttPubrecPacket,
                    mqttPubcompPacket,
                  ];
                });
            });
        });
    };

    const getResponsePacket = (
      abortable: Abortable,
    ): AsyncTask<IAdvancedMqttClientPublishFunctionResult> => {
      switch (qos) {
        case QOS.AT_MOST_ONCE:
          return getAtMostOnceResponsePromise(abortable) as AsyncTask<IAdvancedMqttClientPublishFunctionResult>;
        case QOS.AT_LEAST_ONCE:
          return getAtLeastOnceResponsePromise(abortable) as AsyncTask<IAdvancedMqttClientPublishFunctionResult>;
        case QOS.EXACTLY_ONCE:
          return getExactlyOnceResponsePromise(abortable) as AsyncTask<IAdvancedMqttClientPublishFunctionResult>;
      }
    };

    const untilMqttPacketReceived = getResponsePacket(abortable);

    return $output(publishPacket, abortable)
      .successful((_, abortable: Abortable): AsyncTask<IAdvancedMqttClientPublishFunctionResult> => {
        return untilMqttPacketReceived;
      })
      .finally((): void => {
        if (packetId !== void 0) {
          packetIdManager.remove(packetId);
        }
      });
  };
}
