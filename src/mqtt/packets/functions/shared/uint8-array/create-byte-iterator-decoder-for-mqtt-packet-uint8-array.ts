import { u32 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../misc/codec/byte-iterator-decoder.type';

const BUFFER = new Uint8Array(2 ** 24); // 16M

export function* createByteIteratorDecoderForMqttPacketUint8Array(
  length: u32, // [0, buffer.length]
  output: Uint8Array = BUFFER,
): IByteIteratorDecoder<Uint8Array> {
  let i: number = 0;
  for (; i < length; i++) {
    output[i] = yield;
  }
  return output.slice(0, i);
}

