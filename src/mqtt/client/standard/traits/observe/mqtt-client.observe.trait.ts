import { IMqttClientObserveFunction } from './mqtt-client.observe.function-definition';

export interface IMqttClientObserveTrait {
  observe: IMqttClientObserveFunction;
}
