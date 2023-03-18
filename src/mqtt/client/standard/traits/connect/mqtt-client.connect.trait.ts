import { IMqttClientConnectFunction } from './mqtt-client.connect.function-definition';

export interface IMqttClientConnectTrait {
  connect: IMqttClientConnectFunction;
}
