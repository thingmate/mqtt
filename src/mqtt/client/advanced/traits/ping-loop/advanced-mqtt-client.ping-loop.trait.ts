import { IAdvancedMqttClientPingLoopFunction } from './advanced-mqtt-client.ping-loop.function-definition';

export interface IAdvancedMqttClientPingLoopTrait {
  readonly pingLoop: IAdvancedMqttClientPingLoopFunction;
}
