import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import {
  IMqttPacketAuthenticationDataPropertyName,
  IMqttPacketAuthenticationDataPropertyValue,
} from '../mqtt-packet-authentication-data-property.type';

export type IStandardMqttPacketAuthenticationDataPropertyValue = IMqttPacketAuthenticationDataPropertyValue;

export type IStandardMqttPacketAuthenticationDataProperty = IStandardMqttPacketProperty<IMqttPacketAuthenticationDataPropertyName, IStandardMqttPacketAuthenticationDataPropertyValue>;


