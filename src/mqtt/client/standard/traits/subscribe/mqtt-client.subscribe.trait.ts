import { IMqttClientSubscribeFunction } from './mqtt-client.subscribe.function-definition';

export interface IMqttClientSubscribeTrait {
  readonly subscribe: IMqttClientSubscribeFunction;
}
