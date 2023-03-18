import {
  MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_NAME,
} from '../constants/mqtt-packet-subscription-identifiers-available-property-name.constant';
import { IMqttPacketSubscriptionIdentifiersAvailableProperty } from '../mqtt-packet-subscription-identifiers-available-property.type';
import {
  IStandardMqttPacketSubscriptionIdentifiersAvailableProperty,
} from './standard-mqtt-packet-subscription-identifiers-available-property.type';

export function mqttPacketSubscriptionIdentifiersAvailablePropertyToStandardMqttPacketSubscriptionIdentifiersAvailableProperty(
  {
    getValue,
  }: IMqttPacketSubscriptionIdentifiersAvailableProperty,
): IStandardMqttPacketSubscriptionIdentifiersAvailableProperty {
  return {
    [MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_NAME]: getValue(),
  };
}
