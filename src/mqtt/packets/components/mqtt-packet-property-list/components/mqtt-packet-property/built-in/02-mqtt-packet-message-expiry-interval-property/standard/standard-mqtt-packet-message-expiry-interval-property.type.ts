import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import {
  IMqttPacketMessageExpiryIntervalPropertyName,
  IMqttPacketMessageExpiryIntervalPropertyValue,
} from '../mqtt-packet-message-expiry-interval-property.type';

export type IStandardMqttPacketMessageExpiryIntervalPropertyValue = IMqttPacketMessageExpiryIntervalPropertyValue;

export type IStandardMqttPacketMessageExpiryIntervalProperty = IStandardMqttPacketProperty<IMqttPacketMessageExpiryIntervalPropertyName, IStandardMqttPacketMessageExpiryIntervalPropertyValue>;


