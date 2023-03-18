import { Abortable, AsyncTask } from '@lirx/async-task';
import { IReadonlyMqttConnackPacket } from '../../../../packets/built-in/02-mqtt-connack-packet/readonly/readonly-mqtt-connack-packet.type';

export interface IAdvancedMqttClientPingLoopFunctionOptions {
  abortable: Abortable;
  keepalive: number; // in seconds
  connackPacket?: IReadonlyMqttConnackPacket;
}

export interface IAdvancedMqttClientPingLoopFunction {
  (
    options: IAdvancedMqttClientPingLoopFunctionOptions,
  ): AsyncTask<void>;
}
