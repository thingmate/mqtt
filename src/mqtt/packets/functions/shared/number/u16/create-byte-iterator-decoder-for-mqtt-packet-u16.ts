import { u16 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../misc/codec/byte-iterator-decoder.type';

export function* createByteIteratorDecoderForMqttPacketU16(): IByteIteratorDecoder<u16> {
  // big-endian
  return (
    ((yield) << 8)
    | (yield)
  );
}

