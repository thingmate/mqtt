import { Abortable, AsyncTask, IAsyncTaskErrorFunction, IAsyncTaskSuccessFunction } from '@lirx/async-task';
import { IPurePushSinkWithBackPressure, IPushSourceWithBackPressure } from '@lirx/stream';
import {
  IReadonlyMqttUnsubscribePacket,
} from '../../../../../packets/built-in/10-mqtt-unsubscribe-packet/readonly/readonly-mqtt-unsubscribe-packet.type';
import { isMqttUnsubackPacket } from '../../../../../packets/built-in/11-mqtt-unsuback-packet/constants/is-mqtt-unsuback-packet';
import {
  IReadonlyMqttUnsubackPacket,
} from '../../../../../packets/built-in/11-mqtt-unsuback-packet/readonly/readonly-mqtt-unsuback-packet.type';

import { IMqttPacketIdManager } from '../../../../../packets/components/mqtt-packet-id-manager/mqtt-packet-id-manager.type';
import { IReadonlyMqttPacketId } from '../../../../../packets/components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  UNSUBACK_REASON_CODE,
} from '../../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/11-unsuback/unsuback-reason-code.enum';

import { IGenericMqttPacket } from '../../../../../packets/components/mqtt-packet/mqtt-packet.type';
import {
  createUnsubscribeErrorFromMqttUnsubackPacket,
} from '../../../errors/unsubscribe-error/create-unsubscribe-error-from-mqtt-suback-packet';
import { IAdvancedMqttClientUnsubscribeFunction } from '../../../traits/unsubscribe/advanced-mqtt-client.unsubscribe.function-definition';
import { pushSourceWithBackPressureToAsyncTask } from '../../functions/push-source-with-back-pressure-to-async-task';

export interface ICreateAdvancedMqttClientUnsubscribeFunctionOptions {
  readonly input$: IPushSourceWithBackPressure<IGenericMqttPacket>;
  readonly $output: IPurePushSinkWithBackPressure<IGenericMqttPacket>;
  readonly packetIdManager: IMqttPacketIdManager;
}

export function createAdvancedMqttClientUnsubscribeFunction(
  {
    input$,
    $output,
    packetIdManager,
  }: ICreateAdvancedMqttClientUnsubscribeFunctionOptions,
): IAdvancedMqttClientUnsubscribeFunction {
  return (
    unsubscribePacket: IReadonlyMqttUnsubscribePacket,
    abortable: Abortable,
  ): AsyncTask<IReadonlyMqttUnsubackPacket> => {
    const packetId: IReadonlyMqttPacketId = unsubscribePacket.getPacketId();

    if (packetId !== void 0) {
      packetIdManager.add(packetId);
    }

    const untilMqttUnsubackPacketReceived = pushSourceWithBackPressureToAsyncTask((
      packet: IGenericMqttPacket,
      success: IAsyncTaskSuccessFunction<IReadonlyMqttUnsubackPacket>,
      error: IAsyncTaskErrorFunction,
    ): void => {
      if (
        isMqttUnsubackPacket(packet)
        && (packet.getPacketId().get() === packetId.get())
      ) {
        if (packet.getReason().getCode() === UNSUBACK_REASON_CODE.SUCCESS) {
          success(packet);
        } else {
          error(createUnsubscribeErrorFromMqttUnsubackPacket(packet));
        }
      }
    }, input$, abortable);

    return $output(unsubscribePacket, abortable)
      .successful((): AsyncTask<IReadonlyMqttUnsubackPacket> => {
        return untilMqttUnsubackPacketReceived;
      })
      .finally((): void => {
        if (packetId !== void 0) {
          packetIdManager.remove(packetId);
        }
      });
  };
}
