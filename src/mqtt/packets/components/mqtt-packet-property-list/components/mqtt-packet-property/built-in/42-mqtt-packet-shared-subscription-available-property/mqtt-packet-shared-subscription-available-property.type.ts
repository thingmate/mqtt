import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import {
  MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE,
} from './constants/mqtt-packet-shared-subscription-available-property-code.constant';
import {
  MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_NAME,
} from './constants/mqtt-packet-shared-subscription-available-property-name.constant';

export type IMqttPacketSharedSubscriptionAvailablePropertyCode = typeof MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE;
export type IMqttPacketSharedSubscriptionAvailablePropertyName = typeof MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_NAME;
export type IMqttPacketSharedSubscriptionAvailablePropertyValue = boolean;

export interface IMqttPacketSharedSubscriptionAvailableProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketSharedSubscriptionAvailablePropertyCode, IMqttPacketSharedSubscriptionAvailablePropertyName, IMqttPacketSharedSubscriptionAvailablePropertyValue>
//
{

}

