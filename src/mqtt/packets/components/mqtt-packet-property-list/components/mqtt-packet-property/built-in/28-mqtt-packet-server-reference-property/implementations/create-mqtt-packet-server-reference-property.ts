import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_SERVER_REFERENCE_PROPERTY_CODE } from '../constants/mqtt-packet-server-reference-property-code.constant';
import { MQTT_PACKET_SERVER_REFERENCE_PROPERTY_NAME } from '../constants/mqtt-packet-server-reference-property-name.constant';
import {
  IMqttPacketServerReferenceProperty,
  IMqttPacketServerReferencePropertyCode,
  IMqttPacketServerReferencePropertyName,
  IMqttPacketServerReferencePropertyValue,
} from '../mqtt-packet-server-reference-property.type';

export function createMqttPacketServerReferenceProperty(
  value: IMqttPacketServerReferencePropertyValue,
): IMqttPacketServerReferenceProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketServerReferencePropertyCode, IMqttPacketServerReferencePropertyName, IMqttPacketServerReferencePropertyValue>({
    code: MQTT_PACKET_SERVER_REFERENCE_PROPERTY_CODE,
    name: MQTT_PACKET_SERVER_REFERENCE_PROPERTY_NAME,
    value,
  });
}

