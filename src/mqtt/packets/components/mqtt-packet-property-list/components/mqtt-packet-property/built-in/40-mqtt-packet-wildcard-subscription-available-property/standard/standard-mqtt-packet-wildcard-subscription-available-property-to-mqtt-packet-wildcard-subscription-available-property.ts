import {
  MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_NAME,
} from '../constants/mqtt-packet-wildcard-subscription-available-property-name.constant';
import {
  createMqttPacketWildcardSubscriptionAvailableProperty,
} from '../implementations/create-mqtt-packet-wildcard-subscription-available-property';
import { IMqttPacketWildcardSubscriptionAvailableProperty } from '../mqtt-packet-wildcard-subscription-available-property.type';
import {
  IStandardMqttPacketWildcardSubscriptionAvailableProperty,
} from './standard-mqtt-packet-wildcard-subscription-available-property.type';

export function standardMqttPacketWildcardSubscriptionAvailablePropertyToMqttPacketWildcardSubscriptionAvailableProperty(
  input: IStandardMqttPacketWildcardSubscriptionAvailableProperty,
): IMqttPacketWildcardSubscriptionAvailableProperty {
  return createMqttPacketWildcardSubscriptionAvailableProperty(
    input[MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_NAME],
  );
}
