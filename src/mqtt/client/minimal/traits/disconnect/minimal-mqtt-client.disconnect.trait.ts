import { IMinimalMqttClientDisconnectFunction } from './minimal-mqtt-client.disconnect.function-definition';

export interface IMinimalMqttClientDisconnectTrait {
  readonly disconnect: IMinimalMqttClientDisconnectFunction;
}
