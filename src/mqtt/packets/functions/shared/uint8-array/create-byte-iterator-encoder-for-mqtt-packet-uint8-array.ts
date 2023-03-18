import { IByteIteratorEncoder } from '../../../../../misc/codec/byte-iterator-encoder.type';

export function* createByteIteratorEncoderForMqttPacketUint8Array(
  input: Uint8Array,
): IByteIteratorEncoder {
  yield* (input as any);
}

