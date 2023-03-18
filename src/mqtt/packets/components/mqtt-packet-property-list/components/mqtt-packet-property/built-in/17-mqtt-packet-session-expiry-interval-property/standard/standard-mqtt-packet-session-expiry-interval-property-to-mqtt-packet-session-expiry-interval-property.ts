import { MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_NAME } from '../constants/mqtt-packet-session-expiry-interval-property-name.constant';
import { createMqttPacketSessionExpiryIntervalProperty } from '../implementations/create-mqtt-packet-session-expiry-interval-property';
import { IMqttPacketSessionExpiryIntervalProperty } from '../mqtt-packet-session-expiry-interval-property.type';
import { IStandardMqttPacketSessionExpiryIntervalProperty } from './standard-mqtt-packet-session-expiry-interval-property.type';

export function standardMqttPacketSessionExpiryIntervalPropertyToMqttPacketSessionExpiryIntervalProperty(
  input: IStandardMqttPacketSessionExpiryIntervalProperty,
): IMqttPacketSessionExpiryIntervalProperty {
  return createMqttPacketSessionExpiryIntervalProperty(
    input[MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_NAME],
  );
}
