import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import {
  MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_CODE,
} from './constants/mqtt-packet-subscription-identifiers-available-property-code.constant';
import {
  MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_NAME,
} from './constants/mqtt-packet-subscription-identifiers-available-property-name.constant';

export type IMqttPacketSubscriptionIdentifiersAvailablePropertyCode = typeof MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_CODE;
export type IMqttPacketSubscriptionIdentifiersAvailablePropertyName = typeof MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_NAME;
export type IMqttPacketSubscriptionIdentifiersAvailablePropertyValue = boolean;

export interface IMqttPacketSubscriptionIdentifiersAvailableProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketSubscriptionIdentifiersAvailablePropertyCode, IMqttPacketSubscriptionIdentifiersAvailablePropertyName, IMqttPacketSubscriptionIdentifiersAvailablePropertyValue>
//
{

}

