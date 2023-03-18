import {
  MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_NAME,
} from '../constants/mqtt-packet-wildcard-subscription-available-property-name.constant';
import { IMqttPacketWildcardSubscriptionAvailableProperty } from '../mqtt-packet-wildcard-subscription-available-property.type';
import {
  IStandardMqttPacketWildcardSubscriptionAvailableProperty,
} from './standard-mqtt-packet-wildcard-subscription-available-property.type';

export function mqttPacketWildcardSubscriptionAvailablePropertyToStandardMqttPacketWildcardSubscriptionAvailableProperty(
  {
    getValue,
  }: IMqttPacketWildcardSubscriptionAvailableProperty,
): IStandardMqttPacketWildcardSubscriptionAvailableProperty {
  return {
    [MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_NAME]: getValue(),
  };
}
