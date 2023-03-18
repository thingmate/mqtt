import { MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_NAME } from '../constants/mqtt-packet-message-expiry-interval-property-name.constant';
import { createMqttPacketMessageExpiryIntervalProperty } from '../implementations/create-mqtt-packet-message-expiry-interval-property';
import { IMqttPacketMessageExpiryIntervalProperty } from '../mqtt-packet-message-expiry-interval-property.type';
import { IStandardMqttPacketMessageExpiryIntervalProperty } from './standard-mqtt-packet-message-expiry-interval-property.type';

export function standardMqttPacketMessageExpiryIntervalPropertyToMqttPacketMessageExpiryIntervalProperty(
  input: IStandardMqttPacketMessageExpiryIntervalProperty,
): IMqttPacketMessageExpiryIntervalProperty {
  return createMqttPacketMessageExpiryIntervalProperty(
    input[MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_NAME],
  );
}
