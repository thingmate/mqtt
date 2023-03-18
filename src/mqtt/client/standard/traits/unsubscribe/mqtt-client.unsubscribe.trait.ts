import { IMqttClientUnsubscribeFunction } from './mqtt-client.unsubscribe.function-definition';

export interface IMqttClientUnsubscribeTrait {
  unsubscribe: IMqttClientUnsubscribeFunction;
}
