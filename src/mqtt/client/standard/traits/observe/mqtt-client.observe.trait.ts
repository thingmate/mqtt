import { IMqttClientObserveFunction } from './mqtt-client.observe.function-definition';

export interface IMqttClientObserveTrait {
  readonly observe: IMqttClientObserveFunction;
}
