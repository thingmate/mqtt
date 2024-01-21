import { IAdvancedMqttClientConnectFunction } from './advanced-mqtt-client.connect.function-definition';

export interface IAdvancedMqttClientConnectTrait {
  readonly connect: IAdvancedMqttClientConnectFunction;
}
