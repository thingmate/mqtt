import {
  getByteLengthOfEncodedMqttPacketUint8ArrayWithLength,
} from '../../../../../../functions/shared/uint8-array/with-length/get-byte-length-of-encoded-mqtt-packet-uint8-array-with-length';
import { IReadonlyMqttPacketPayload } from '../../../readonly-mqtt-packet-payload.type';

export function getByteLengthOfEncodedReadonlyMqttPacketPayloadWithLength(
  input: IReadonlyMqttPacketPayload,
): number {
  return getByteLengthOfEncodedMqttPacketUint8ArrayWithLength(input.toUint8Array());
}
