import {
  createReadonlyStringBufferFromString,
} from '../../../../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-string';
import { MQTT_PACKET_SERVER_REFERENCE_PROPERTY_NAME } from '../constants/mqtt-packet-server-reference-property-name.constant';
import { createMqttPacketServerReferenceProperty } from '../implementations/create-mqtt-packet-server-reference-property';
import { IMqttPacketServerReferenceProperty } from '../mqtt-packet-server-reference-property.type';
import { IStandardMqttPacketServerReferenceProperty } from './standard-mqtt-packet-server-reference-property.type';

export function standardMqttPacketServerReferencePropertyToMqttPacketServerReferenceProperty(
  input: IStandardMqttPacketServerReferenceProperty,
): IMqttPacketServerReferenceProperty {
  return createMqttPacketServerReferenceProperty(
    createReadonlyStringBufferFromString(input[MQTT_PACKET_SERVER_REFERENCE_PROPERTY_NAME]),
  );
}
