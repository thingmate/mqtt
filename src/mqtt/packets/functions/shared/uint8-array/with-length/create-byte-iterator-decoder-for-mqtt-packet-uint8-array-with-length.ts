import { IByteIteratorDecoder } from '../../../../../../misc/codec/byte-iterator-decoder.type';
import { createByteIteratorDecoderForMqttPacketU16 } from '../../number/u16/create-byte-iterator-decoder-for-mqtt-packet-u16';
import { createByteIteratorDecoderForMqttPacketUint8Array } from '../create-byte-iterator-decoder-for-mqtt-packet-uint8-array';

export function* createByteIteratorDecoderForMqttPacketUint8ArrayWithLength(
  output?: Uint8Array,
): IByteIteratorDecoder<Uint8Array> {
  return yield* createByteIteratorDecoderForMqttPacketUint8Array(
    yield* createByteIteratorDecoderForMqttPacketU16(),
    output,
  );
}

