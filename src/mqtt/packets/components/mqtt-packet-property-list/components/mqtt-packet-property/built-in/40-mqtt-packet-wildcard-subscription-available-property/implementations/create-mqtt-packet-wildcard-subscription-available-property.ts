import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import {
  MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE,
} from '../constants/mqtt-packet-wildcard-subscription-available-property-code.constant';
import {
  MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_NAME,
} from '../constants/mqtt-packet-wildcard-subscription-available-property-name.constant';
import {
  IMqttPacketWildcardSubscriptionAvailableProperty,
  IMqttPacketWildcardSubscriptionAvailablePropertyCode,
  IMqttPacketWildcardSubscriptionAvailablePropertyName,
  IMqttPacketWildcardSubscriptionAvailablePropertyValue,
} from '../mqtt-packet-wildcard-subscription-available-property.type';

export function createMqttPacketWildcardSubscriptionAvailableProperty(
  value: IMqttPacketWildcardSubscriptionAvailablePropertyValue,
): IMqttPacketWildcardSubscriptionAvailableProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketWildcardSubscriptionAvailablePropertyCode, IMqttPacketWildcardSubscriptionAvailablePropertyName, IMqttPacketWildcardSubscriptionAvailablePropertyValue>({
    code: MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE,
    name: MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_NAME,
    value,
  });
}

