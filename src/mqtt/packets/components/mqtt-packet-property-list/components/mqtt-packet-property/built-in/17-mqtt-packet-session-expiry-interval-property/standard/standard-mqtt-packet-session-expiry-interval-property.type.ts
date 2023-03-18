import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import {
  IMqttPacketSessionExpiryIntervalPropertyName,
  IMqttPacketSessionExpiryIntervalPropertyValue,
} from '../mqtt-packet-session-expiry-interval-property.type';

export type IStandardMqttPacketSessionExpiryIntervalPropertyValue = IMqttPacketSessionExpiryIntervalPropertyValue;

export type IStandardMqttPacketSessionExpiryIntervalProperty = IStandardMqttPacketProperty<IMqttPacketSessionExpiryIntervalPropertyName, IStandardMqttPacketSessionExpiryIntervalPropertyValue>;


