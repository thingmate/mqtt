import { AsyncTask, IAbortableOptions } from '@lirx/async-task';
import {
  IStandardMqttConnectPacketWill,
} from '../../../../packets/built-in/01-mqtt-connect-packet/components/mqtt-connect-packet-will/readonly/standard/standard-mqtt-connect-packet-will.type';
import {
  IStandardMqttConnectPacket,
} from '../../../../packets/built-in/01-mqtt-connect-packet/readonly/standard/standard-mqtt-connect-packet.type';
import {
  IStandardMqttConnackPacket,
} from '../../../../packets/built-in/02-mqtt-connack-packet/readonly/standard/standard-mqtt-connack-packet.type';

export interface IMqttClientConnectFunctionOptions extends //
  Partial<Pick<IStandardMqttConnectPacket, 'protocolVersion' | 'clean' | 'keepalive' | 'properties' | 'clientId' | 'username' | 'password'>>,
  IAbortableOptions
//
{
  readonly will?: IStandardMqttConnectPacketWill; // TODO
}

export interface IMqttClientConnectFunction {
  (
    options: IMqttClientConnectFunctionOptions,
  ): AsyncTask<IStandardMqttConnackPacket>;
}
