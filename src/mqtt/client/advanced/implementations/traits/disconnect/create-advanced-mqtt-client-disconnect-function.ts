import { Abortable, AsyncTask } from '@lirx/async-task';
import { IPurePushSinkWithBackPressure } from '@lirx/stream';
import {
  IReadonlyMqttDisconnectPacket,
} from '../../../../../packets/built-in/14-mqtt-disconnect-packet/readonly/readonly-mqtt-disconnect-packet.type';
import { IGenericMqttPacket } from '../../../../../packets/components/mqtt-packet/mqtt-packet.type';
import { IAdvancedMqttClientDisconnectFunction } from '../../../traits/disconnect/advanced-mqtt-client.disconnect.function-definition';

export interface ICreateAdvancedMqttClientDisconnectFunctionOptions {
  readonly $output: IPurePushSinkWithBackPressure<IGenericMqttPacket>;
}

export function createAdvancedMqttClientDisconnectFunction(
  {
    $output,
  }: ICreateAdvancedMqttClientDisconnectFunctionOptions,
): IAdvancedMqttClientDisconnectFunction {
  let started: boolean;

  return (
    disconnectPacket: IReadonlyMqttDisconnectPacket,
    abortable: Abortable,
  ): AsyncTask<void> => {
    if (started) {
      return AsyncTask.error(new Error(`disconnect already done`), abortable);
    } else {
      return $output(disconnectPacket, abortable);
    }
  };
}
