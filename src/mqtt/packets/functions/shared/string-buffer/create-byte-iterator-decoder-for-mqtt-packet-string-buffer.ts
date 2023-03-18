import { createReadonlyStringBuffer } from '../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer';
import { IReadonlyStringBuffer } from '../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IByteIteratorDecoder } from '../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketUint8ArrayWithLength,
} from '../uint8-array/with-length/create-byte-iterator-decoder-for-mqtt-packet-uint8-array-with-length';

export function* createByteIteratorDecoderForMqttPacketReadonlyStringBuffer(): IByteIteratorDecoder<IReadonlyStringBuffer> {
  return createReadonlyStringBuffer({
    buffer: yield* createByteIteratorDecoderForMqttPacketUint8ArrayWithLength(),
  });
}

