import { IMqttClientPublishFunction } from './mqtt-client.publish.function-definition';

export interface IMqttClientPublishTrait {
  readonly publish: IMqttClientPublishFunction;
}
