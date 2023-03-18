import { getByteLengthOfEncodedMqttPacketU16 } from '../../number/u16/get-byte-length-of-encoded-mqtt-packet-u16';
import { getByteLengthOfEncodedMqttPacketUint8Array } from '../get-byte-length-of-encoded-mqtt-packet-uint8-array';

export function getByteLengthOfEncodedMqttPacketUint8ArrayWithLength(
  input: Uint8Array,
): number {
  return getByteLengthOfEncodedMqttPacketU16() + getByteLengthOfEncodedMqttPacketUint8Array(input);
}
