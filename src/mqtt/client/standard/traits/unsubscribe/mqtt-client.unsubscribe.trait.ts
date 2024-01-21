import { IMqttClientUnsubscribeFunction } from './mqtt-client.unsubscribe.function-definition';

export interface IMqttClientUnsubscribeTrait {
  readonly unsubscribe: IMqttClientUnsubscribeFunction;
}
