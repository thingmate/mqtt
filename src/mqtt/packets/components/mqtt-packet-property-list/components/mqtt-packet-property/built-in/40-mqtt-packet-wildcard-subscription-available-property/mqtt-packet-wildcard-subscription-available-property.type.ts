import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import {
  MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE,
} from './constants/mqtt-packet-wildcard-subscription-available-property-code.constant';
import {
  MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_NAME,
} from './constants/mqtt-packet-wildcard-subscription-available-property-name.constant';

export type IMqttPacketWildcardSubscriptionAvailablePropertyCode = typeof MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE;
export type IMqttPacketWildcardSubscriptionAvailablePropertyName = typeof MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_NAME;
export type IMqttPacketWildcardSubscriptionAvailablePropertyValue = boolean;

export interface IMqttPacketWildcardSubscriptionAvailableProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketWildcardSubscriptionAvailablePropertyCode, IMqttPacketWildcardSubscriptionAvailablePropertyName, IMqttPacketWildcardSubscriptionAvailablePropertyValue>
//
{

}

