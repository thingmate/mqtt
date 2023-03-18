import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_CODE } from '../constants/mqtt-packet-session-expiry-interval-property-code.constant';
import { MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_NAME } from '../constants/mqtt-packet-session-expiry-interval-property-name.constant';
import {
  IMqttPacketSessionExpiryIntervalProperty,
  IMqttPacketSessionExpiryIntervalPropertyCode,
  IMqttPacketSessionExpiryIntervalPropertyName,
  IMqttPacketSessionExpiryIntervalPropertyValue,
} from '../mqtt-packet-session-expiry-interval-property.type';

export function createMqttPacketSessionExpiryIntervalProperty(
  value: IMqttPacketSessionExpiryIntervalPropertyValue,
): IMqttPacketSessionExpiryIntervalProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketSessionExpiryIntervalPropertyCode, IMqttPacketSessionExpiryIntervalPropertyName, IMqttPacketSessionExpiryIntervalPropertyValue>({
    code: MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_CODE,
    name: MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_NAME,
    value,
  });
}

