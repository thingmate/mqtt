import { IMinimalMqttClientPublishFunction } from './minimal-mqtt-client.publish.function-definition';

export interface IMinimalMqttClientPublishTrait {
  readonly publish: IMinimalMqttClientPublishFunction;
}
