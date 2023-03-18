import { u16 } from '@lifaon/number-types';
import { IReadonlyStringBuffer } from '../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IMqttProtocolVersion } from '../../../../../constants/mqtt-protocol-version.type';
import { IReadonlyMqttConnectPacketWill } from '../../components/mqtt-connect-packet-will/readonly/readonly-mqtt-connect-packet-will.type';
import { IMqttConnectPacketType, MQTT_CONNECT_PACKET_TYPE } from '../../constants/mqtt-connect-packet-type.constant';
import { IReadonlyMqttConnectPacket } from '../readonly-mqtt-connect-packet.type';
import {
  IReadonlyMqttConnectPacketPropertyList,
} from '../traits/get-properties/readonly-mqtt-connect-packet.get-properties.function-definition';
import {
  IReadonlyMqttConnectPacketProtocolName,
} from '../traits/get-protocol-name/readonly-mqtt-connect-packet.get-protocol-name.function-definition';

export interface IReadonlyMqttConnectPacketContext {
  protocolName: IReadonlyMqttConnectPacketProtocolName;
  protocolVersion: IMqttProtocolVersion;
  clean: boolean;
  keepalive: u16;
  properties: IReadonlyMqttConnectPacketPropertyList;
  clientId: IReadonlyStringBuffer;
  will: IReadonlyMqttConnectPacketWill | undefined;
  username: IReadonlyStringBuffer | undefined;
  password: IReadonlyStringBuffer | undefined;
}

export function createReadonlyMqttConnectPacket(
  context: IReadonlyMqttConnectPacketContext,
): IReadonlyMqttConnectPacket {
  const getType = (): IMqttConnectPacketType => {
    return MQTT_CONNECT_PACKET_TYPE;
  };

  const getProtocolName = (): IReadonlyMqttConnectPacketProtocolName => {
    return context.protocolName;
  };

  const getProtocolVersion = (): IMqttProtocolVersion => {
    return context.protocolVersion;
  };

  const getClean = (): boolean => {
    return context.clean;
  };

  const getKeepalive = (): u16 => {
    return context.keepalive;
  };

  const getProperties = (): IReadonlyMqttConnectPacketPropertyList => {
    return context.properties;
  };

  const getClientId = (): IReadonlyStringBuffer => {
    return context.clientId;
  };

  const getWill = (): IReadonlyMqttConnectPacketWill | undefined => {
    return context.will;
  };

  const getUsername = (): IReadonlyStringBuffer | undefined => {
    return context.username;
  };

  const getPassword = (): IReadonlyStringBuffer | undefined => {
    return context.password;
  };

  return {
    getType,
    getProtocolName,
    getProtocolVersion,
    getClean,
    getKeepalive,
    getProperties,
    getClientId,
    getWill,
    getUsername,
    getPassword,
  };
}

