import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_MAXIMUM_QOS_PROPERTY_CODE } from '../constants/mqtt-packet-maximum-qos-property-code.constant';
import { MQTT_PACKET_MAXIMUM_QOS_PROPERTY_NAME } from '../constants/mqtt-packet-maximum-qos-property-name.constant';
import {
  IMqttPacketMaximumQoSProperty,
  IMqttPacketMaximumQoSPropertyCode,
  IMqttPacketMaximumQoSPropertyName,
  IMqttPacketMaximumQoSPropertyValue,
} from '../mqtt-packet-maximum-qos-property.type';

export function createMqttPacketMaximumQoSProperty(
  value: IMqttPacketMaximumQoSPropertyValue,
): IMqttPacketMaximumQoSProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketMaximumQoSPropertyCode, IMqttPacketMaximumQoSPropertyName, IMqttPacketMaximumQoSPropertyValue>({
    code: MQTT_PACKET_MAXIMUM_QOS_PROPERTY_CODE,
    name: MQTT_PACKET_MAXIMUM_QOS_PROPERTY_NAME,
    value,
  });
}

