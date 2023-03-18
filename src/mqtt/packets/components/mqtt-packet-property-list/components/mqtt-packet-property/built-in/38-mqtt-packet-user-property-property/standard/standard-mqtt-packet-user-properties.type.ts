import { IStandardMqttPacketProperty } from '../../../readonly/standard/standard-mqtt-packet-property.type';
import {
  IStandardMqttPacketUserPropertyEntry,
} from '../components/mqtt-packet-user-property-entry/standard/standard-mqtt-packet-user-property-entry.type';
import { STANDARD_MQTT_PACKET_USER_PROPERTY_NAME } from './standard-mqtt-packet-user-properties-name.constant';

export type IStandardMqttPacketUserPropertiesName = typeof STANDARD_MQTT_PACKET_USER_PROPERTY_NAME;
export type IStandardMqttPacketUserPropertiesValue = IStandardMqttPacketUserPropertyEntry;

export type IStandardMqttPacketUserProperties = IStandardMqttPacketProperty<IStandardMqttPacketUserPropertiesName, IStandardMqttPacketUserPropertiesValue>;


