import { Abortable, AsyncTask } from '@lirx/async-task';
import {
  IStandardMqttDisconnectPacket,
} from '../../../../packets/built-in/14-mqtt-disconnect-packet/readonly/standard/standard-mqtt-disconnect-packet.type';

export interface IMqttClientDisconnectFunctionOptions extends //
  Partial<Pick<IStandardMqttDisconnectPacket, 'reason' | 'properties'>>
//
{
  abortable: Abortable;
}

export interface IMqttClientDisconnectFunction {
  (
    options: IMqttClientDisconnectFunctionOptions,
  ): AsyncTask<void>;
}
