import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_CODE } from '../constants/mqtt-packet-message-expiry-interval-property-code.constant';
import { MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_NAME } from '../constants/mqtt-packet-message-expiry-interval-property-name.constant';
import {
  IMqttPacketMessageExpiryIntervalProperty,
  IMqttPacketMessageExpiryIntervalPropertyCode,
  IMqttPacketMessageExpiryIntervalPropertyName,
  IMqttPacketMessageExpiryIntervalPropertyValue,
} from '../mqtt-packet-message-expiry-interval-property.type';

export function createMqttPacketMessageExpiryIntervalProperty(
  value: IMqttPacketMessageExpiryIntervalPropertyValue,
): IMqttPacketMessageExpiryIntervalProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketMessageExpiryIntervalPropertyCode, IMqttPacketMessageExpiryIntervalPropertyName, IMqttPacketMessageExpiryIntervalPropertyValue>({
    code: MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_CODE,
    name: MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_NAME,
    value,
  });
}

