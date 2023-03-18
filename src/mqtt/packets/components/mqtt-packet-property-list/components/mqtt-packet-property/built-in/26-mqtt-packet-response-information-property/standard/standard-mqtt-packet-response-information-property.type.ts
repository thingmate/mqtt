import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import { IMqttPacketResponseInformationPropertyName } from '../mqtt-packet-response-information-property.type';

export type IStandardMqttPacketResponseInformationPropertyValue = string;

export type IStandardMqttPacketResponseInformationProperty = IStandardMqttPacketProperty<IMqttPacketResponseInformationPropertyName, IStandardMqttPacketResponseInformationPropertyValue>;


