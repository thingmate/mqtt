import { IMqttPacketUserPropertyEntry } from '../mqtt-packet-user-property-entry.type';
import { IStandardMqttPacketUserPropertyEntry } from './standard-mqtt-packet-user-property-entry.type';

export function mqttPacketUserPropertyToStandardMqttPacketUserPropertyType(
  {
    getKey,
    getValue,
  }: IMqttPacketUserPropertyEntry,
): IStandardMqttPacketUserPropertyEntry {
  return {
    [getKey().toString()]: getValue().toString(),
  };
}
