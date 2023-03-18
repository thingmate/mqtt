import { Abortable, AsyncTask, IAsyncTaskErrorFunction, IAsyncTaskSuccessFunction } from '@lirx/async-task';
import { IPushSinkWithBackPressure, IPushSourceWithBackPressure } from '@lirx/stream';
import {
  IReadonlyMqttConnectPacket,
} from '../../../../../packets/built-in/01-mqtt-connect-packet/readonly/readonly-mqtt-connect-packet.type';
import { isMqttConnackPacket } from '../../../../../packets/built-in/02-mqtt-connack-packet/constants/is-mqtt-connack-packet';
import {
  IReadonlyMqttConnackPacket,
} from '../../../../../packets/built-in/02-mqtt-connack-packet/readonly/readonly-mqtt-connack-packet.type';
import {
  CONNACK_REASON_CODE,
} from '../../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/02-connack/connack-reason-code.enum';
import { IGenericMqttPacket } from '../../../../../packets/components/mqtt-packet/mqtt-packet.type';
import { createConnectError } from '../../../errors/connect-error/create-connect-error';
import { createConnectErrorFromMqttConnackPacket } from '../../../errors/connect-error/create-connect-error-from-mqtt-connack-packet';
import { IAdvancedMqttClientConnectFunction } from '../../../traits/connect/advanced-mqtt-client.connect.function-definition';
import { pushSourceWithBackPressureToAsyncTask } from '../../functions/push-source-with-back-pressure-to-async-task';

export interface ICreateAdvancedMqttClientConnectFunctionOptions {
  input$: IPushSourceWithBackPressure<IGenericMqttPacket>;
  $output: IPushSinkWithBackPressure<IGenericMqttPacket>;
}

export function createAdvancedMqttClientConnectFunction(
  {
    input$,
    $output,
  }: ICreateAdvancedMqttClientConnectFunctionOptions,
): IAdvancedMqttClientConnectFunction {
  let started: boolean;

  return (
    connectPacket: IReadonlyMqttConnectPacket,
    abortable: Abortable,
  ): AsyncTask<IReadonlyMqttConnackPacket> => {
    if (started) {
      return AsyncTask.error(new Error(`connect already done`), abortable);
    } else {
      const untilMqttConnackPacketReceived = pushSourceWithBackPressureToAsyncTask((
        packet: IGenericMqttPacket,
        success: IAsyncTaskSuccessFunction<IReadonlyMqttConnackPacket>,
        error: IAsyncTaskErrorFunction,
        abortable: Abortable,
      ): AsyncTask<void> => {
        if (isMqttConnackPacket(packet)) {
          if (packet.getReason().getCode() === CONNACK_REASON_CODE.SUCCESS) {
            success(packet);
          } else {
            error(createConnectErrorFromMqttConnackPacket(packet));
          }
        } else {
          error(createConnectError({ message: `Expected CONNACK packet` }));
        }
        return AsyncTask.void(abortable);
      }, input$, abortable);

      return $output(connectPacket, abortable)
        .successful((): AsyncTask<IReadonlyMqttConnackPacket> => {
          return untilMqttConnackPacketReceived;
        });
    }
  };
}
