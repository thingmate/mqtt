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
  readonly protocolName: IReadonlyMqttConnectPacketProtocolName;
  readonly protocolVersion: IMqttProtocolVersion;
  readonly clean: boolean;
  readonly keepalive: u16;
  readonly properties: IStandardMqttConnectPacketProperties;
  readonly clientId: string;
  readonly will: IStandardMqttConnectPacketWill | undefined;
  readonly username: string | undefined;
  readonly password: string | undefined;
}
