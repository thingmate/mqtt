import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import {
  IMqttPacketServerKeepAlivePropertyName,
  IMqttPacketServerKeepAlivePropertyValue,
} from '../mqtt-packet-server-keep-alive-property.type';

export type IStandardMqttPacketServerKeepAlivePropertyValue = IMqttPacketServerKeepAlivePropertyValue;

export type IStandardMqttPacketServerKeepAliveProperty = IStandardMqttPacketProperty<IMqttPacketServerKeepAlivePropertyName, IStandardMqttPacketServerKeepAlivePropertyValue>;


