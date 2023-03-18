import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import { IMqttPacketServerReferencePropertyName } from '../mqtt-packet-server-reference-property.type';

export type IStandardMqttPacketServerReferencePropertyValue = string;

export type IStandardMqttPacketServerReferenceProperty = IStandardMqttPacketProperty<IMqttPacketServerReferencePropertyName, IStandardMqttPacketServerReferencePropertyValue>;


