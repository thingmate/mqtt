import { IMqttClientSubscribeFunction } from './mqtt-client.subscribe.function-definition';

export interface IMqttClientSubscribeTrait {
  subscribe: IMqttClientSubscribeFunction;
}
