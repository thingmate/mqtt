import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import {
  IMqttPacketCorrelationDataPropertyName,
  IMqttPacketCorrelationDataPropertyValue,
} from '../mqtt-packet-correlation-data-property.type';

export type IStandardMqttPacketCorrelationDataPropertyValue = IMqttPacketCorrelationDataPropertyValue;

export type IStandardMqttPacketCorrelationDataProperty = IStandardMqttPacketProperty<IMqttPacketCorrelationDataPropertyName, IStandardMqttPacketCorrelationDataPropertyValue>;


