import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import {
  IMqttPacketWillDelayIntervalPropertyName,
  IMqttPacketWillDelayIntervalPropertyValue,
} from '../mqtt-packet-will-delay-interval-property.type';

export type IStandardMqttPacketWillDelayIntervalPropertyValue = IMqttPacketWillDelayIntervalPropertyValue;

export type IStandardMqttPacketWillDelayIntervalProperty = IStandardMqttPacketProperty<IMqttPacketWillDelayIntervalPropertyName, IStandardMqttPacketWillDelayIntervalPropertyValue>;


