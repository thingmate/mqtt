import { IMqttPacketUserPropertyEntry } from '../components/mqtt-packet-user-property-entry/mqtt-packet-user-property-entry.type';
import {
  standardMqttPacketUserPropertyEntryToMqttPacketUserPropertyEntryList,
} from '../components/mqtt-packet-user-property-entry/standard/standard-mqtt-packet-user-property-entry-to-mqtt-packet-user-property-entry-list';
import { createMqttPacketUserProperty } from '../implementations/create-mqtt-packet-user-property';
import { IMqttPacketUserProperty } from '../mqtt-packet-user-property.type';
import { STANDARD_MQTT_PACKET_USER_PROPERTY_NAME } from './standard-mqtt-packet-user-properties-name.constant';
import { IStandardMqttPacketUserProperties } from './standard-mqtt-packet-user-properties.type';

export function standardMqttPacketUserPropertiesToMqttPacketUserPropertyList(
  input: IStandardMqttPacketUserProperties,
): IMqttPacketUserProperty[] {
  return standardMqttPacketUserPropertyEntryToMqttPacketUserPropertyEntryList(input[STANDARD_MQTT_PACKET_USER_PROPERTY_NAME])
    .map((entry: IMqttPacketUserPropertyEntry): IMqttPacketUserProperty => {
      return createMqttPacketUserProperty(entry);
    });

}
