import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import { IMqttPacketReasonStringPropertyName } from '../mqtt-packet-reason-string-property.type';

export type IStandardMqttPacketReasonStringPropertyValue = string;

export type IStandardMqttPacketReasonStringProperty = IStandardMqttPacketProperty<IMqttPacketReasonStringPropertyName, IStandardMqttPacketReasonStringPropertyValue>;


