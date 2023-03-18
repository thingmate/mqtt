import { u32 } from '@lifaon/number-types';
import { IByteIteratorEncoder } from '../../../../../../misc/codec/byte-iterator-encoder.type';

export function* createByteIteratorEncoderForMqttPacketU32(
  input: u32,
): IByteIteratorEncoder {
  // big-endian
  yield ((input >> 24) & 0xff);
  yield ((input >> 16) & 0xff);
  yield ((input >> 8) & 0xff);
  yield (input & 0xff);
}

