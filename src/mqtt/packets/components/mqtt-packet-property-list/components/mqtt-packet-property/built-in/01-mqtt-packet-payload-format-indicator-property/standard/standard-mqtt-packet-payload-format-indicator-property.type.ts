import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import {
  IMqttPacketPayloadFormatIndicatorPropertyName,
  IMqttPacketPayloadFormatIndicatorPropertyValue,
} from '../mqtt-packet-payload-format-indicator-property.type';

export type IStandardMqttPacketPayloadFormatIndicatorPropertyValue = IMqttPacketPayloadFormatIndicatorPropertyValue;

export type IStandardMqttPacketPayloadFormatIndicatorProperty = IStandardMqttPacketProperty<IMqttPacketPayloadFormatIndicatorPropertyName, IStandardMqttPacketPayloadFormatIndicatorPropertyValue>;


