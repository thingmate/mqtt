import { IByteIteratorDecoder } from '../../../../../misc/codec/byte-iterator-decoder.type';

export function* createByteIteratorDecoderForMqttPacketBoolean(): IByteIteratorDecoder<boolean> {
  return Boolean(yield);
}

