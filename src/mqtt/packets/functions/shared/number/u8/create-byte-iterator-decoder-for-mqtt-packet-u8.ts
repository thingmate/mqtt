import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../misc/codec/byte-iterator-decoder.type';

export function* createByteIteratorDecoderForMqttPacketU8(): IByteIteratorDecoder<u8> {
  return (yield);
}

