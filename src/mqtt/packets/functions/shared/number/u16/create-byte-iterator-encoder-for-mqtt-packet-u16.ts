import { u16 } from '@lifaon/number-types';
import { IByteIteratorEncoder } from '../../../../../../misc/codec/byte-iterator-encoder.type';

export function* createByteIteratorEncoderForMqttPacketU16(
  input: u16,
): IByteIteratorEncoder {
  // big-endian
  yield ((input >> 8) & 0xff);
  yield (input & 0xff);
}

