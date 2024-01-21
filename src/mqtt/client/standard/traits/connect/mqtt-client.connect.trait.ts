import { IMqttClientConnectFunction } from './mqtt-client.connect.function-definition';

export interface IMqttClientConnectTrait {
  readonly connect: IMqttClientConnectFunction;
}
