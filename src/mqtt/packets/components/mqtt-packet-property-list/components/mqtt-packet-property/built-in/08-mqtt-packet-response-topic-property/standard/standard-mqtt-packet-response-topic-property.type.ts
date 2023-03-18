import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import { IMqttPacketResponseTopicPropertyName } from '../mqtt-packet-response-topic-property.type';

export type IStandardMqttPacketResponseTopicPropertyValue = string;

export type IStandardMqttPacketResponseTopicProperty = IStandardMqttPacketProperty<IMqttPacketResponseTopicPropertyName, IStandardMqttPacketResponseTopicPropertyValue>;


