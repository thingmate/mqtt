import { IAdvancedMqttClientSubscribeFunction } from './advanced-mqtt-client.subscribe.function-definition';

export interface IAdvancedMqttClientSubscribeTrait {
  readonly subscribe: IAdvancedMqttClientSubscribeFunction;
}
