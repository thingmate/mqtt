import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import {
  MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_CODE,
} from '../constants/mqtt-packet-subscription-identifiers-available-property-code.constant';
import {
  MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_NAME,
} from '../constants/mqtt-packet-subscription-identifiers-available-property-name.constant';
import {
  IMqttPacketSubscriptionIdentifiersAvailableProperty,
  IMqttPacketSubscriptionIdentifiersAvailablePropertyCode,
  IMqttPacketSubscriptionIdentifiersAvailablePropertyName,
  IMqttPacketSubscriptionIdentifiersAvailablePropertyValue,
} from '../mqtt-packet-subscription-identifiers-available-property.type';

export function createMqttPacketSubscriptionIdentifiersAvailableProperty(
  value: IMqttPacketSubscriptionIdentifiersAvailablePropertyValue,
): IMqttPacketSubscriptionIdentifiersAvailableProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketSubscriptionIdentifiersAvailablePropertyCode, IMqttPacketSubscriptionIdentifiersAvailablePropertyName, IMqttPacketSubscriptionIdentifiersAvailablePropertyValue>({
    code: MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_CODE,
    name: MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_NAME,
    value,
  });
}

