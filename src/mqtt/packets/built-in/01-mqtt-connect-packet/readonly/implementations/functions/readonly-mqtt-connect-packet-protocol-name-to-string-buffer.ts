import {
  createReadonlyStringBufferFromString,
} from '../../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-string';
import { IReadonlyStringBuffer } from '../../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import {
  IReadonlyMqttConnectPacketProtocolName,
} from '../../traits/get-protocol-name/readonly-mqtt-connect-packet.get-protocol-name.function-definition';

const READONLY_MQTT_CONNECT_PACKET_PROTOCOL_NAME_MQTT_STRING_BUFFER = createReadonlyStringBufferFromString('MQTT');

export function readonlyMqttConnectPacketProtocolNameToReadonlyStringBuffer(
  protocolName: IReadonlyMqttConnectPacketProtocolName,
): IReadonlyStringBuffer {
  switch (protocolName) {
    case 'MQTT':
      return READONLY_MQTT_CONNECT_PACKET_PROTOCOL_NAME_MQTT_STRING_BUFFER;
    default:
      throw new Error(`Invalid protocolName: ${protocolName}`);
  }
}
