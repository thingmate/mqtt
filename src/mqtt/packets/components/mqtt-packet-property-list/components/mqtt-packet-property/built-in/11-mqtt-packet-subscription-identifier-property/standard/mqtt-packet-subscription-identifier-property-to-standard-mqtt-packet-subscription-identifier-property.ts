import { MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_NAME } from '../constants/mqtt-packet-subscription-identifier-property-name.constant';
import { IMqttPacketSubscriptionIdentifierProperty } from '../mqtt-packet-subscription-identifier-property.type';
import { IStandardMqttPacketSubscriptionIdentifierProperty } from './standard-mqtt-packet-subscription-identifier-property.type';

export function mqttPacketSubscriptionIdentifierPropertyToStandardMqttPacketSubscriptionIdentifierProperty(
  {
    getValue,
  }: IMqttPacketSubscriptionIdentifierProperty,
): IStandardMqttPacketSubscriptionIdentifierProperty {
  return {
    [MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_NAME]: getValue(),
  };
}
