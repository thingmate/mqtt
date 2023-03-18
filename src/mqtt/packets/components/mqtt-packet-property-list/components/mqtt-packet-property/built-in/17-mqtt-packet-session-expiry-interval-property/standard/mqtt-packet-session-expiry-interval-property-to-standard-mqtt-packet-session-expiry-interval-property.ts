import { MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_NAME } from '../constants/mqtt-packet-session-expiry-interval-property-name.constant';
import { IMqttPacketSessionExpiryIntervalProperty } from '../mqtt-packet-session-expiry-interval-property.type';
import { IStandardMqttPacketSessionExpiryIntervalProperty } from './standard-mqtt-packet-session-expiry-interval-property.type';

export function mqttPacketSessionExpiryIntervalPropertyToStandardMqttPacketSessionExpiryIntervalProperty(
  {
    getValue,
  }: IMqttPacketSessionExpiryIntervalProperty,
): IStandardMqttPacketSessionExpiryIntervalProperty {
  return {
    [MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_NAME]: getValue(),
  };
}
