import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import {
  IMqttPacketRequestResponseInformationPropertyName,
  IMqttPacketRequestResponseInformationPropertyValue,
} from '../mqtt-packet-request-response-information-property.type';

export type IStandardMqttPacketRequestResponseInformationPropertyValue = IMqttPacketRequestResponseInformationPropertyValue;

export type IStandardMqttPacketRequestResponseInformationProperty = IStandardMqttPacketProperty<IMqttPacketRequestResponseInformationPropertyName, IStandardMqttPacketRequestResponseInformationPropertyValue>;


