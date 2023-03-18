import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import {
  IMqttPacketRequestProblemInformationPropertyName,
  IMqttPacketRequestProblemInformationPropertyValue,
} from '../mqtt-packet-request-problem-information-property.type';

export type IStandardMqttPacketRequestProblemInformationPropertyValue = IMqttPacketRequestProblemInformationPropertyValue;

export type IStandardMqttPacketRequestProblemInformationProperty = IStandardMqttPacketProperty<IMqttPacketRequestProblemInformationPropertyName, IStandardMqttPacketRequestProblemInformationPropertyValue>;


