import {
  getByteLengthOfEncodedMqttPacketUserPropertyEntry,
} from '../../components/mqtt-packet-user-property-entry/implementations/functions/get-byte-length-of-encoded-mqtt-packet-user-property-entry';
import { IMqttPacketUserPropertyValue } from '../../mqtt-packet-user-property.type';

export function getByteLengthOfEncodedMqttPacketUserPropertyValue(
  input: IMqttPacketUserPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketUserPropertyEntry(input);
}
