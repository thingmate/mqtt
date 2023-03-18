import {
  IReadonlyMqttConnectPacketWill,
} from '../../../components/mqtt-connect-packet-will/readonly/readonly-mqtt-connect-packet-will.type';

export interface IReadonlyMqttConnectPacketGetWillFunction {
  (): IReadonlyMqttConnectPacketWill | undefined;
}
