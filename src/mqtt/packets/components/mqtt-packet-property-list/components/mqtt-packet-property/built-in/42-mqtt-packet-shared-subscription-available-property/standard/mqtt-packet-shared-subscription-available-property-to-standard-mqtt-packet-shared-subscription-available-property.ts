import {
  MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_NAME,
} from '../constants/mqtt-packet-shared-subscription-available-property-name.constant';
import { IMqttPacketSharedSubscriptionAvailableProperty } from '../mqtt-packet-shared-subscription-available-property.type';
import { IStandardMqttPacketSharedSubscriptionAvailableProperty } from './standard-mqtt-packet-shared-subscription-available-property.type';

export function mqttPacketSharedSubscriptionAvailablePropertyToStandardMqttPacketSharedSubscriptionAvailableProperty(
  {
    getValue,
  }: IMqttPacketSharedSubscriptionAvailableProperty,
): IStandardMqttPacketSharedSubscriptionAvailableProperty {
  return {
    [MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_NAME]: getValue(),
  };
}
