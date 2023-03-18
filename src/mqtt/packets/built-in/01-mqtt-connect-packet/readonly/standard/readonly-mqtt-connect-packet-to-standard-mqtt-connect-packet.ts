import { IReadonlyStringBuffer } from '../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import {
  readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/readonly-mqtt-packet-property-list-to-standard-mqtt-packet-property-list';
import { IReadonlyMqttConnectPacketWill } from '../../components/mqtt-connect-packet-will/readonly/readonly-mqtt-connect-packet-will.type';
import {
  readonlyMqttConnectPacketWillToStandardMqttConnectPacketWill,
} from '../../components/mqtt-connect-packet-will/readonly/standard/readonly-mqtt-connect-packet-will-to-standard-mqtt-connect-packet-will';
import { IReadonlyMqttConnectPacket } from '../readonly-mqtt-connect-packet.type';
import { IStandardMqttConnectPacket } from './standard-mqtt-connect-packet.type';

export function readonlyMqttConnectPacketToStandardMqttConnectPacket(
  {
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
  }: IReadonlyMqttConnectPacket,
): IStandardMqttConnectPacket {
  const will: IReadonlyMqttConnectPacketWill | undefined = getWill();
  const username: IReadonlyStringBuffer | undefined = getUsername();
  const password: IReadonlyStringBuffer | undefined = getPassword();

  return {
    type: getType(),
    protocolName: getProtocolName(),
    protocolVersion: getProtocolVersion(),
    clean: getClean(),
    keepalive: getKeepalive(),
    properties: readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList(getProperties()),
    clientId: getClientId().toString(),
    will: (will === void 0)
      ? void 0
      : readonlyMqttConnectPacketWillToStandardMqttConnectPacketWill(will),
    username: (username === void 0)
      ? void 0
      : username.toString(),
    password: (password === void 0)
      ? void 0
      : password.toString(),
  };
}
