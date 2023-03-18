import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import { IMqttPacketContentTypePropertyName } from '../mqtt-packet-content-type-property.type';

export type IStandardMqttPacketContentTypePropertyValue = string;

export type IStandardMqttPacketContentTypeProperty = IStandardMqttPacketProperty<IMqttPacketContentTypePropertyName, IStandardMqttPacketContentTypePropertyValue>;


