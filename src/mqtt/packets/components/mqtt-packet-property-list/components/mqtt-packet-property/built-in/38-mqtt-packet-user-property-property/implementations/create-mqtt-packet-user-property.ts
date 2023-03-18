import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_USER_PROPERTY_CODE } from '../constants/mqtt-packet-user-property-code.constant';
import { MQTT_PACKET_USER_PROPERTY_NAME } from '../constants/mqtt-packet-user-property-name.constant';
import {
  IMqttPacketUserProperty,
  IMqttPacketUserPropertyCode,
  IMqttPacketUserPropertyName,
  IMqttPacketUserPropertyValue,
} from '../mqtt-packet-user-property.type';

export function createMqttPacketUserProperty(
  value: IMqttPacketUserPropertyValue,
): IMqttPacketUserProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketUserPropertyCode, IMqttPacketUserPropertyName, IMqttPacketUserPropertyValue>({
    code: MQTT_PACKET_USER_PROPERTY_CODE,
    name: MQTT_PACKET_USER_PROPERTY_NAME,
    value,
  });
}

