import { IByteIteratorEncoder } from '../../../../../misc/codec/byte-iterator-encoder.type';

export function* createByteIteratorEncoderForMqttPacketBoolean(
  input: boolean,
): IByteIteratorEncoder {
  yield (input ? 1 : 0);
}

