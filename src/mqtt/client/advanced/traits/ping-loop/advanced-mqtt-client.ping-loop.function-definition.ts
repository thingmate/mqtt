import { Abortable, AsyncTask } from '@lirx/async-task';
import { IReadonlyMqttConnackPacket } from '../../../../packets/built-in/02-mqtt-connack-packet/readonly/readonly-mqtt-connack-packet.type';

export interface IAdvancedMqttClientPingLoopFunctionOptions {
  readonly abortable: Abortable;
  readonly keepalive: number; // in seconds
  readonly connackPacket?: IReadonlyMqttConnackPacket;
}

export interface IAdvancedMqttClientPingLoopFunction {
  (
    options: IAdvancedMqttClientPingLoopFunctionOptions,
  ): AsyncTask<void>;
}
