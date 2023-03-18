import { MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_NAME } from '../constants/mqtt-packet-message-expiry-interval-property-name.constant';
import { IMqttPacketMessageExpiryIntervalProperty } from '../mqtt-packet-message-expiry-interval-property.type';
import { IStandardMqttPacketMessageExpiryIntervalProperty } from './standard-mqtt-packet-message-expiry-interval-property.type';

export function mqttPacketMessageExpiryIntervalPropertyToStandardMqttPacketMessageExpiryIntervalProperty(
  {
    getValue,
  }: IMqttPacketMessageExpiryIntervalProperty,
): IStandardMqttPacketMessageExpiryIntervalProperty {
  return {
    [MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_NAME]: getValue(),
  };
}
