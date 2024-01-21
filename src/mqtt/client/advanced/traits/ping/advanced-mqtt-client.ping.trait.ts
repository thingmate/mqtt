import { IAdvancedMqttClientPingFunction } from './advanced-mqtt-client.ping.function-definition';

export interface IAdvancedMqttClientPingTrait {
  readonly ping: IAdvancedMqttClientPingFunction;
}
