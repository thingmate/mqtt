import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_CODE } from '../constants/mqtt-packet-maximum-packet-size-property-code.constant';
import { MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_NAME } from '../constants/mqtt-packet-maximum-packet-size-property-name.constant';
import {
  IMqttPacketMaximumPacketSizeProperty,
  IMqttPacketMaximumPacketSizePropertyCode,
  IMqttPacketMaximumPacketSizePropertyName,
  IMqttPacketMaximumPacketSizePropertyValue,
} from '../mqtt-packet-maximum-packet-size-property.type';

export function createMqttPacketMaximumPacketSizeProperty(
  value: IMqttPacketMaximumPacketSizePropertyValue,
): IMqttPacketMaximumPacketSizeProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketMaximumPacketSizePropertyCode, IMqttPacketMaximumPacketSizePropertyName, IMqttPacketMaximumPacketSizePropertyValue>({
    code: MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_CODE,
    name: MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_NAME,
    value,
  });
}

