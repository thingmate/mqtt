import { u32 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../misc/codec/byte-iterator-decoder.type';

export function* createByteIteratorDecoderForMqttPacketU32(): IByteIteratorDecoder<u32> {
  // big-endian
  return (
    ((yield) << 24)
    | ((yield) << 16)
    | ((yield) << 8)
    | (yield)
  ) >>> 0;
}

