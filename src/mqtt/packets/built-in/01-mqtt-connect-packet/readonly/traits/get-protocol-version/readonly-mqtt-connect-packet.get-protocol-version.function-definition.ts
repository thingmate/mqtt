import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';

export interface IReadonlyMqttConnectPacketGetProtocolVersionFunction {
  (): IMqttProtocolVersion;
}
