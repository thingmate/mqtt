import { IReadonlyStringBuffer } from '../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import {
  getByteLengthOfEncodedMqttPacketUint8ArrayWithLength,
} from '../uint8-array/with-length/get-byte-length-of-encoded-mqtt-packet-uint8-array-with-length';

export function getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(
  input: IReadonlyStringBuffer,
): number {
  return getByteLengthOfEncodedMqttPacketUint8ArrayWithLength(input.toUint8Array());
}
