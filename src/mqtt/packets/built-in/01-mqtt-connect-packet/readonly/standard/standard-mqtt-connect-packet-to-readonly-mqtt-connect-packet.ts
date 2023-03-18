import {
  createReadonlyStringBufferFromString,
} from '../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-string';
import {
  standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/standard-mqtt-packet-property-list-to-readonly-mqtt-packet-property-list';
import {
  standardMqttConnectPacketWillToReadonlyMqttConnectPacketWill,
} from '../../components/mqtt-connect-packet-will/readonly/standard/standard-mqtt-connect-packet-will-to-readonly-mqtt-connect-packet-will';
import { createReadonlyMqttConnectPacket } from '../implementations/create-readonly-mqtt-connect-packet';
import { IReadonlyMqttConnectPacket } from '../readonly-mqtt-connect-packet.type';
import { IStandardMqttConnectPacket } from './standard-mqtt-connect-packet.type';

export function standardMqttConnectPacketToReadonlyMqttConnectPacket(
  {
    protocolName,
    protocolVersion,
    clean,
    keepalive,
    properties,
    clientId,
    will,
    username,
    password,
  }: Omit<IStandardMqttConnectPacket, 'type'>,
): IReadonlyMqttConnectPacket {
  return createReadonlyMqttConnectPacket({
    protocolName,
    protocolVersion,
    clean,
    keepalive,
    properties: standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList(properties),
    clientId: createReadonlyStringBufferFromString(clientId),
    will: (will === void 0)
      ? void 0
      : standardMqttConnectPacketWillToReadonlyMqttConnectPacketWill(will),
    username: (username === void 0)
      ? void 0
      : createReadonlyStringBufferFromString(username),
    password: (password === void 0)
      ? void 0
      : createReadonlyStringBufferFromString(password),
  });
}
