import { getByteLengthOfEncodedMqttPacketU16 } from '../../../../../functions/shared/number/u16/get-byte-length-of-encoded-mqtt-packet-u16';
import { IReadonlyMqttPacketId } from '../../readonly-mqtt-packet-id.type';

export function getByteLengthOfEncodedReadonlyMqttPacketId(
  input: IReadonlyMqttPacketId,
): number {
  return getByteLengthOfEncodedMqttPacketU16();
}
