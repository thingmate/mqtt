import { IAdvancedMqttClientPublishFunction } from './advanced-mqtt-client.publish.function-definition';

export interface IAdvancedMqttClientPublishTrait {
  readonly publish: IAdvancedMqttClientPublishFunction;
}
