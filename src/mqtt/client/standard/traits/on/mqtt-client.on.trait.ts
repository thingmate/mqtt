import { IMqttClientOnFunction } from './mqtt-client.on.function-definition';

export interface IMqttClientOnTrait {
  readonly on: IMqttClientOnFunction;
}
