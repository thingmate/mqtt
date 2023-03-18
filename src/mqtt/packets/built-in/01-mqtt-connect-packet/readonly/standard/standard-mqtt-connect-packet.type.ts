import { u16 } from '@lifaon/number-types';
import { IMqttProtocolVersion } from '../../../../../constants/mqtt-protocol-version.type';
import { IStandardMqttPacket } from '../../../../components/mqtt-packet/standard/standard-mqtt-packet.type';
import {
  IStandardMqttConnectPacketWill,
} from '../../components/mqtt-connect-packet-will/readonly/standard/standard-mqtt-connect-packet-will.type';
import { IMqttConnectPacketType } from '../../constants/mqtt-connect-packet-type.constant';
import {
  IReadonlyMqttConnectPacketProtocolName,
} from '../traits/get-protocol-name/readonly-mqtt-connect-packet.get-protocol-name.function-definition';
import { IStandardMqttConnectPacketProperties } from './standard-mqtt-connect-packet-properties.type';

export interface IStandardMqttConnectPacket extends IStandardMqttPacket<IMqttConnectPacketType> {
  protocolName: IReadonlyMqttConnectPacketProtocolName;
  protocolVersion: IMqttProtocolVersion;
  clean: boolean;
  keepalive: u16;
  properties: IStandardMqttConnectPacketProperties;
  clientId: string;
  will: IStandardMqttConnectPacketWill | undefined;
  username: string | undefined;
  password: string | undefined;
}
