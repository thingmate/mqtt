import { Abortable, AsyncTask } from '@lirx/async-task';
import { IReadonlyMqttConnectPacket } from '../../../../packets/built-in/01-mqtt-connect-packet/readonly/readonly-mqtt-connect-packet.type';
import { IReadonlyMqttConnackPacket } from '../../../../packets/built-in/02-mqtt-connack-packet/readonly/readonly-mqtt-connack-packet.type';

export interface IAdvancedMqttClientConnectFunction {
  (
    connectPacket: IReadonlyMqttConnectPacket,
    abortable: Abortable,
  ): AsyncTask<IReadonlyMqttConnackPacket>;
}
