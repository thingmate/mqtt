import {
  MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_NAME,
} from '../constants/mqtt-packet-subscription-identifiers-available-property-name.constant';
import {
  createMqttPacketSubscriptionIdentifiersAvailableProperty,
} from '../implementations/create-mqtt-packet-subscription-identifiers-available-property';
import { IMqttPacketSubscriptionIdentifiersAvailableProperty } from '../mqtt-packet-subscription-identifiers-available-property.type';
import {
  IStandardMqttPacketSubscriptionIdentifiersAvailableProperty,
} from './standard-mqtt-packet-subscription-identifiers-available-property.type';

export function standardMqttPacketSubscriptionIdentifiersAvailablePropertyToMqttPacketSubscriptionIdentifiersAvailableProperty(
  input: IStandardMqttPacketSubscriptionIdentifiersAvailableProperty,
): IMqttPacketSubscriptionIdentifiersAvailableProperty {
  return createMqttPacketSubscriptionIdentifiersAvailableProperty(
    input[MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_NAME],
  );
}
