import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import {
  MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE,
} from '../constants/mqtt-packet-shared-subscription-available-property-code.constant';
import {
  MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_NAME,
} from '../constants/mqtt-packet-shared-subscription-available-property-name.constant';
import {
  IMqttPacketSharedSubscriptionAvailableProperty,
  IMqttPacketSharedSubscriptionAvailablePropertyCode,
  IMqttPacketSharedSubscriptionAvailablePropertyName,
  IMqttPacketSharedSubscriptionAvailablePropertyValue,
} from '../mqtt-packet-shared-subscription-available-property.type';

export function createMqttPacketSharedSubscriptionAvailableProperty(
  value: IMqttPacketSharedSubscriptionAvailablePropertyValue,
): IMqttPacketSharedSubscriptionAvailableProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketSharedSubscriptionAvailablePropertyCode, IMqttPacketSharedSubscriptionAvailablePropertyName, IMqttPacketSharedSubscriptionAvailablePropertyValue>({
    code: MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE,
    name: MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_NAME,
    value,
  });
}

