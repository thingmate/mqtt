import {
  IReadonlyMqttConnectPacketWillGetPropertiesFunction,
} from './readonly-mqtt-connect-packet-will.get-properties.function-definition';

export interface IReadonlyMqttConnectPacketWillGetPropertiesTrait {
  readonly getProperties: IReadonlyMqttConnectPacketWillGetPropertiesFunction;
}
