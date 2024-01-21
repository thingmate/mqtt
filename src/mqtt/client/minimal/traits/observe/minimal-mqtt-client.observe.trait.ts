import { IMinimalMqttClientObserveFunction } from './minimal-mqtt-client.observe.function-definition';

export interface IMinimalMqttClientObserveTrait {
  readonly observe: IMinimalMqttClientObserveFunction;
}
