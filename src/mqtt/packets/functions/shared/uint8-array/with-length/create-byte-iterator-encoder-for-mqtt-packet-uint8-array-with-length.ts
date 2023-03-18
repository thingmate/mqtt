import { IByteIteratorEncoder } from '../../../../../../misc/codec/byte-iterator-encoder.type';
import { createByteIteratorEncoderForMqttPacketU16 } from '../../number/u16/create-byte-iterator-encoder-for-mqtt-packet-u16';
import { createByteIteratorEncoderForMqttPacketUint8Array } from '../create-byte-iterator-encoder-for-mqtt-packet-uint8-array';

export function* createByteIteratorEncoderForMqttPacketUint8ArrayWithLength(
  input: Uint8Array,
): IByteIteratorEncoder {
  yield* createByteIteratorEncoderForMqttPacketU16(input.length);
  yield* createByteIteratorEncoderForMqttPacketUint8Array(input);
}

