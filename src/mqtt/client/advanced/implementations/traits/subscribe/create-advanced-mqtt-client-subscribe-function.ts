import { Abortable, AsyncTask, IAsyncTaskErrorFunction, IAsyncTaskSuccessFunction } from '@lirx/async-task';
import { IPurePushSinkWithBackPressure, IPushSourceWithBackPressure } from '@lirx/stream';
import { QOS } from '../../../../../constants/qos.enum';
import {
  IReadonlyMqttSubscribePacketSubscription,
} from '../../../../../packets/built-in/08-mqtt-subscribe-packet/components/mqtt-subscribe-packet-subscription/readonly/readonly-mqtt-subscribe-packet-subscription.type';
import {
  IReadonlyMqttSubscribePacket,
} from '../../../../../packets/built-in/08-mqtt-subscribe-packet/readonly/readonly-mqtt-subscribe-packet.type';
import { isMqttSubackPacket } from '../../../../../packets/built-in/09-mqtt-suback-packet/constants/is-mqtt-suback-packet';
import { IReadonlyMqttSubackPacket } from '../../../../../packets/built-in/09-mqtt-suback-packet/readonly/readonly-mqtt-suback-packet.type';
import { IMqttPacketIdManager } from '../../../../../packets/components/mqtt-packet-id-manager/mqtt-packet-id-manager.type';
import { IReadonlyMqttPacketId } from '../../../../../packets/components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  doesSuccessSubackReasonCodeMatchQoS,
} from '../../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/09-suback/does-success-suback-reason-code-match-qos';
import {
  isSuccessSubackReasonCode,
} from '../../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/09-suback/is-success-suback-reason-code';
import {
  IGenericMqttPacketSubackReason,
} from '../../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/09-suback/mqtt-packet-suback-reason.type';
import {
  SUBACK_REASON_CODE,
} from '../../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/09-suback/suback-reason-code.enum';

import { IGenericMqttPacket } from '../../../../../packets/components/mqtt-packet/mqtt-packet.type';
import { createSubscribeError } from '../../../errors/subscribe-error/create-subscribe-error';
import { createSubscribeErrorFromMqttSubackPacket } from '../../../errors/subscribe-error/create-subscribe-error-from-mqtt-suback-packet';
import { IAdvancedMqttClientSubscribeFunction } from '../../../traits/subscribe/advanced-mqtt-client.subscribe.function-definition';
import { pushSourceWithBackPressureToAsyncTask } from '../../functions/push-source-with-back-pressure-to-async-task';

export interface ICreateAdvancedMqttClientSubscribeFunctionOptions {
  readonly input$: IPushSourceWithBackPressure<IGenericMqttPacket>;
  readonly $output: IPurePushSinkWithBackPressure<IGenericMqttPacket>;
  readonly packetIdManager: IMqttPacketIdManager;
}

export function createAdvancedMqttClientSubscribeFunction(
  {
    input$,
    $output,
    packetIdManager,
  }: ICreateAdvancedMqttClientSubscribeFunctionOptions,
): IAdvancedMqttClientSubscribeFunction {
  return (
    subscribePacket: IReadonlyMqttSubscribePacket,
    abortable: Abortable,
  ): AsyncTask<IReadonlyMqttSubackPacket> => {
    const packetId: IReadonlyMqttPacketId = subscribePacket.getPacketId();
    const subscriptions: readonly IReadonlyMqttSubscribePacketSubscription[] = subscribePacket.getSubscriptions();

    if (packetId !== void 0) {
      packetIdManager.add(packetId);
    }

    const untilMqttSubackPacketReceived = pushSourceWithBackPressureToAsyncTask((
      packet: IGenericMqttPacket,
      success: IAsyncTaskSuccessFunction<IReadonlyMqttSubackPacket>,
      error: IAsyncTaskErrorFunction,
    ): void => {
      if (
        isMqttSubackPacket(packet)
        && (packet.getPacketId().get() === packetId.get())
      ) {
        const reasons: readonly IGenericMqttPacketSubackReason[] = packet.getReasons();
        const length: number = reasons.length;

        if (length === subscriptions.length) {
          for (let i = 0; i < length; i++) {
            const reasonCode: SUBACK_REASON_CODE = reasons[i].getCode();
            const { getQoS }: IReadonlyMqttSubscribePacketSubscription = subscriptions[i];
            const qos: QOS = getQoS();

            if (isSuccessSubackReasonCode(reasonCode)) {
              if (!doesSuccessSubackReasonCodeMatchQoS(reasonCode, qos)) {
                error(createSubscribeError({ message: `You asked for a QoS of ${qos} but the server only granted ${reasonCode}` }));
              }
            } else {
              error(createSubscribeErrorFromMqttSubackPacket(packet, i));
            }
          }
          success(packet);
        } else {
          error(createSubscribeError({ message: `SUBACK reasonCodes don't have the same length as input subscriptions` }));
        }
      }
    }, input$, abortable);

    return $output(subscribePacket, abortable)
      .successful((): AsyncTask<IReadonlyMqttSubackPacket> => {
        return untilMqttSubackPacketReceived;
      })
      .finally((): void => {
        if (packetId !== void 0) {
          packetIdManager.remove(packetId);
        }
      });
  };
}
