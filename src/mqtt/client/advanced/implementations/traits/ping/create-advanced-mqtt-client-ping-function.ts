import { Abortable, AsyncTask, IAsyncTaskErrorFunction, IAsyncTaskSuccessFunction } from '@lirx/async-task';
import { IPushSinkWithBackPressure, IPushSourceWithBackPressure } from '@lirx/stream';
import {
  STATIC_MQTT_PINGREQ_PACKET,
} from '../../../../../packets/built-in/12-mqtt-pingreq-packet/constants/static-mqtt-pingreq-packet.constant';
import { isMqttPingrespPacket } from '../../../../../packets/built-in/13-mqtt-pingresp-packet/constants/is-mqtt-pingresp-packet';

import { IGenericMqttPacket } from '../../../../../packets/components/mqtt-packet/mqtt-packet.type';
import { IAdvancedMqttClientPingFunction } from '../../../traits/ping/advanced-mqtt-client.ping.function-definition';
import { pushSourceWithBackPressureToAsyncTask } from '../../functions/push-source-with-back-pressure-to-async-task';

export interface ICreateAdvancedMqttClientPingFunctionOptions {
  input$: IPushSourceWithBackPressure<IGenericMqttPacket>;
  $output: IPushSinkWithBackPressure<IGenericMqttPacket>;
}

export function createAdvancedMqttClientPingFunction(
  {
    input$,
    $output,
  }: ICreateAdvancedMqttClientPingFunctionOptions,
): IAdvancedMqttClientPingFunction {
  return (
    abortable: Abortable,
  ): AsyncTask<void> => {
    const untilMqttPingrespPacketReceived = pushSourceWithBackPressureToAsyncTask((
      packet: IGenericMqttPacket,
      success: IAsyncTaskSuccessFunction<void>,
      error: IAsyncTaskErrorFunction,
      abortable: Abortable,
    ): AsyncTask<void> => {
      if (isMqttPingrespPacket(packet)) {
        success();
      }
      return AsyncTask.void(abortable);
    }, input$, abortable);

    return $output(STATIC_MQTT_PINGREQ_PACKET, abortable)
      .successful((): AsyncTask<void> => {
        return untilMqttPingrespPacketReceived;
      });
  };
}
