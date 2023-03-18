import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import {
  MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_CODE,
} from '../constants/mqtt-packet-assigned-client-identifier-property-code.constant';
import {
  MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_NAME,
} from '../constants/mqtt-packet-assigned-client-identifier-property-name.constant';
import {
  IMqttPacketAssignedClientIdentifierProperty,
  IMqttPacketAssignedClientIdentifierPropertyCode,
  IMqttPacketAssignedClientIdentifierPropertyName,
  IMqttPacketAssignedClientIdentifierPropertyValue,
} from '../mqtt-packet-assigned-client-identifier-property.type';

export function createMqttPacketAssignedClientIdentifierProperty(
  value: IMqttPacketAssignedClientIdentifierPropertyValue,
): IMqttPacketAssignedClientIdentifierProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketAssignedClientIdentifierPropertyCode, IMqttPacketAssignedClientIdentifierPropertyName, IMqttPacketAssignedClientIdentifierPropertyValue>({
    code: MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_CODE,
    name: MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_NAME,
    value,
  });
}

