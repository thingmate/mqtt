import { IReadonlyMqttConnectPacketWillGetQoSFunction } from './readonly-mqtt-connect-packet-will.get-qos.function-definition';

export interface IReadonlyMqttConnectPacketWillGetQoSTrait {
  readonly getQoS: IReadonlyMqttConnectPacketWillGetQoSFunction;
}
