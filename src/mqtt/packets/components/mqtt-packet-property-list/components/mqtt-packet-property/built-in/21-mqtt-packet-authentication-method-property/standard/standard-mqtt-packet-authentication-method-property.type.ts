import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import { IMqttPacketAuthenticationMethodPropertyName } from '../mqtt-packet-authentication-method-property.type';

export type IStandardMqttPacketAuthenticationMethodPropertyValue = string;

export type IStandardMqttPacketAuthenticationMethodProperty = IStandardMqttPacketProperty<IMqttPacketAuthenticationMethodPropertyName, IStandardMqttPacketAuthenticationMethodPropertyValue>;


