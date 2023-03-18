import { u8 } from '@lifaon/number-types';
import { IByteIteratorEncoder } from '../../../../../../misc/codec/byte-iterator-encoder.type';

export function* createByteIteratorEncoderForMqttPacketU8(
  input: u8,
): IByteIteratorEncoder {
  yield (input & 0xff);
}

