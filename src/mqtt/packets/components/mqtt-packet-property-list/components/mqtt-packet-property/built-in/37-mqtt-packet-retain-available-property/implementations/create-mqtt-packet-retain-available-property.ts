import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_CODE } from '../constants/mqtt-packet-retain-available-property-code.constant';
import { MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_NAME } from '../constants/mqtt-packet-retain-available-property-name.constant';
import {
  IMqttPacketRetainAvailableProperty,
  IMqttPacketRetainAvailablePropertyCode,
  IMqttPacketRetainAvailablePropertyName,
  IMqttPacketRetainAvailablePropertyValue,
} from '../mqtt-packet-retain-available-property.type';

export function createMqttPacketRetainAvailableProperty(
  value: IMqttPacketRetainAvailablePropertyValue,
): IMqttPacketRetainAvailableProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketRetainAvailablePropertyCode, IMqttPacketRetainAvailablePropertyName, IMqttPacketRetainAvailablePropertyValue>({
    code: MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_CODE,
    name: MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_NAME,
    value,
  });
}

