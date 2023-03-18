import {
  createReadonlyStringBufferFromString,
} from '../../../../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-string';
import {
  MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_NAME,
} from '../constants/mqtt-packet-assigned-client-identifier-property-name.constant';
import {
  createMqttPacketAssignedClientIdentifierProperty,
} from '../implementations/create-mqtt-packet-assigned-client-identifier-property';
import { IMqttPacketAssignedClientIdentifierProperty } from '../mqtt-packet-assigned-client-identifier-property.type';
import { IStandardMqttPacketAssignedClientIdentifierProperty } from './standard-mqtt-packet-assigned-client-identifier-property.type';

export function standardMqttPacketAssignedClientIdentifierPropertyToMqttPacketAssignedClientIdentifierProperty(
  input: IStandardMqttPacketAssignedClientIdentifierProperty,
): IMqttPacketAssignedClientIdentifierProperty {
  return createMqttPacketAssignedClientIdentifierProperty(
    createReadonlyStringBufferFromString(input[MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_NAME]),
  );
}
