import { Abortable, AsyncTask } from '@lirx/async-task';
import {
  IReadonlyMqttDisconnectPacket,
} from '../../../../packets/built-in/14-mqtt-disconnect-packet/readonly/readonly-mqtt-disconnect-packet.type';

export interface IAdvancedMqttClientDisconnectFunction {
  (
    disconnectPacket: IReadonlyMqttDisconnectPacket,
    abortable: Abortable,
  ): AsyncTask<void>;
}
