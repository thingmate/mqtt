import { MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_NAME } from '../constants/mqtt-packet-subscription-identifier-property-name.constant';
import { createMqttPacketSubscriptionIdentifierProperty } from '../implementations/create-mqtt-packet-subscription-identifier-property';
import { IMqttPacketSubscriptionIdentifierProperty } from '../mqtt-packet-subscription-identifier-property.type';
import { IStandardMqttPacketSubscriptionIdentifierProperty } from './standard-mqtt-packet-subscription-identifier-property.type';

export function standardMqttPacketSubscriptionIdentifierPropertyToMqttPacketSubscriptionIdentifierProperty(
  input: IStandardMqttPacketSubscriptionIdentifierProperty,
): IMqttPacketSubscriptionIdentifierProperty {
  return createMqttPacketSubscriptionIdentifierProperty(
    input[MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_NAME],
  );
}
