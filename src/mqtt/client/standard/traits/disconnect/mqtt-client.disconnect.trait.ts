import { IMqttClientDisconnectFunction } from './mqtt-client.disconnect.function-definition';

export interface IMqttClientDisconnectTrait {
  readonly disconnect: IMqttClientDisconnectFunction;
}
