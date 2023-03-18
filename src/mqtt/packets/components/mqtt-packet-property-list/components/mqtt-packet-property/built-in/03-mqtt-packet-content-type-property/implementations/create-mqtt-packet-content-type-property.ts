import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_CONTENT_TYPE_PROPERTY_CODE } from '../constants/mqtt-packet-content-type-property-code.constant';
import { MQTT_PACKET_CONTENT_TYPE_PROPERTY_NAME } from '../constants/mqtt-packet-content-type-property-name.constant';
import {
  IMqttPacketContentTypeProperty,
  IMqttPacketContentTypePropertyCode,
  IMqttPacketContentTypePropertyName,
  IMqttPacketContentTypePropertyValue,
} from '../mqtt-packet-content-type-property.type';

export function createMqttPacketContentTypeProperty(
  value: IMqttPacketContentTypePropertyValue,
): IMqttPacketContentTypeProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketContentTypePropertyCode, IMqttPacketContentTypePropertyName, IMqttPacketContentTypePropertyValue>({
    code: MQTT_PACKET_CONTENT_TYPE_PROPERTY_CODE,
    name: MQTT_PACKET_CONTENT_TYPE_PROPERTY_NAME,
    value,
  });
}

