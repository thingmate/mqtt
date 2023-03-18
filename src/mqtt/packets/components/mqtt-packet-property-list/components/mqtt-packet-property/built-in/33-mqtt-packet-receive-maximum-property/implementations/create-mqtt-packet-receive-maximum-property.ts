import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_CODE } from '../constants/mqtt-packet-receive-maximum-property-code.constant';
import { MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_NAME } from '../constants/mqtt-packet-receive-maximum-property-name.constant';
import {
  IMqttPacketReceiveMaximumProperty,
  IMqttPacketReceiveMaximumPropertyCode,
  IMqttPacketReceiveMaximumPropertyName,
  IMqttPacketReceiveMaximumPropertyValue,
} from '../mqtt-packet-receive-maximum-property.type';

export function createMqttPacketReceiveMaximumProperty(
  value: IMqttPacketReceiveMaximumPropertyValue,
): IMqttPacketReceiveMaximumProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketReceiveMaximumPropertyCode, IMqttPacketReceiveMaximumPropertyName, IMqttPacketReceiveMaximumPropertyValue>({
    code: MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_CODE,
    name: MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_NAME,
    value,
  });
}

