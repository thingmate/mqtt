import {
  MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_NAME,
} from '../constants/mqtt-packet-shared-subscription-available-property-name.constant';
import {
  createMqttPacketSharedSubscriptionAvailableProperty,
} from '../implementations/create-mqtt-packet-shared-subscription-available-property';
import { IMqttPacketSharedSubscriptionAvailableProperty } from '../mqtt-packet-shared-subscription-available-property.type';
import { IStandardMqttPacketSharedSubscriptionAvailableProperty } from './standard-mqtt-packet-shared-subscription-available-property.type';

export function standardMqttPacketSharedSubscriptionAvailablePropertyToMqttPacketSharedSubscriptionAvailableProperty(
  input: IStandardMqttPacketSharedSubscriptionAvailableProperty,
): IMqttPacketSharedSubscriptionAvailableProperty {
  return createMqttPacketSharedSubscriptionAvailableProperty(
    input[MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_NAME],
  );
}
