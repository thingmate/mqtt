import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import {
  IMqttPacketReceiveMaximumPropertyName,
  IMqttPacketReceiveMaximumPropertyValue,
} from '../mqtt-packet-receive-maximum-property.type';

export type IStandardMqttPacketReceiveMaximumPropertyValue = IMqttPacketReceiveMaximumPropertyValue;

export type IStandardMqttPacketReceiveMaximumProperty = IStandardMqttPacketProperty<IMqttPacketReceiveMaximumPropertyName, IStandardMqttPacketReceiveMaximumPropertyValue>;


