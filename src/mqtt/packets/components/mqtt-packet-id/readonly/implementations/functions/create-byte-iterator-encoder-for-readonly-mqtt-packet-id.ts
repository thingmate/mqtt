import { IByteIteratorEncoder } from '../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketU16,
} from '../../../../../functions/shared/number/u16/create-byte-iterator-encoder-for-mqtt-packet-u16';
import { IReadonlyMqttPacketId } from '../../readonly-mqtt-packet-id.type';

export function createByteIteratorEncoderForReadonlyMqttPacketId(
  input: IReadonlyMqttPacketId,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketU16(input.get());
}

