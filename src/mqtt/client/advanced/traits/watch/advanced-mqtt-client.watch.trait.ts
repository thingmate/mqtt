import { IAdvancedMqttClientWatchFunction } from './advanced-mqtt-client.watch.function-definition';

export interface IAdvancedMqttClientWatchTrait {
  readonly watch: IAdvancedMqttClientWatchFunction;
}
