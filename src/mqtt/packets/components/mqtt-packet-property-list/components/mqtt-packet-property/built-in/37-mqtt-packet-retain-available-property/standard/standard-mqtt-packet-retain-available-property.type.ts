import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import {
  IMqttPacketRetainAvailablePropertyName,
  IMqttPacketRetainAvailablePropertyValue,
} from '../mqtt-packet-retain-available-property.type';

export type IStandardMqttPacketRetainAvailablePropertyValue = IMqttPacketRetainAvailablePropertyValue;

export type IStandardMqttPacketRetainAvailableProperty = IStandardMqttPacketProperty<IMqttPacketRetainAvailablePropertyName, IStandardMqttPacketRetainAvailablePropertyValue>;


