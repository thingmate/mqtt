import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import {
  IMqttPacketSubscriptionIdentifierPropertyName,
  IMqttPacketSubscriptionIdentifierPropertyValue,
} from '../mqtt-packet-subscription-identifier-property.type';

export type IStandardMqttPacketSubscriptionIdentifierPropertyValue = IMqttPacketSubscriptionIdentifierPropertyValue;

export type IStandardMqttPacketSubscriptionIdentifierProperty = IStandardMqttPacketProperty<IMqttPacketSubscriptionIdentifierPropertyName, IStandardMqttPacketSubscriptionIdentifierPropertyValue>;


