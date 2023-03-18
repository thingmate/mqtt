import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import {
  IMqttPacketSharedSubscriptionAvailablePropertyName,
  IMqttPacketSharedSubscriptionAvailablePropertyValue,
} from '../mqtt-packet-shared-subscription-available-property.type';

export type IStandardMqttPacketSharedSubscriptionAvailablePropertyValue = IMqttPacketSharedSubscriptionAvailablePropertyValue;

export type IStandardMqttPacketSharedSubscriptionAvailableProperty = IStandardMqttPacketProperty<IMqttPacketSharedSubscriptionAvailablePropertyName, IStandardMqttPacketSharedSubscriptionAvailablePropertyValue>;


