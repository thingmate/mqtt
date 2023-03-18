import {
  getByteLengthOfEncodedMqttPacketUint8Array,
} from '../../../../../functions/shared/uint8-array/get-byte-length-of-encoded-mqtt-packet-uint8-array';
import { IReadonlyMqttPacketPayload } from '../../readonly-mqtt-packet-payload.type';

export function getByteLengthOfEncodedReadonlyMqttPacketPayload(
  input: IReadonlyMqttPacketPayload,
): number {
  return getByteLengthOfEncodedMqttPacketUint8Array(input.toUint8Array());
}
