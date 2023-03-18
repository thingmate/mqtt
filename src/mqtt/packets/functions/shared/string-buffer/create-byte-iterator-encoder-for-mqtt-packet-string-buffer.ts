import { IReadonlyStringBuffer } from '../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IByteIteratorEncoder } from '../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketUint8ArrayWithLength,
} from '../uint8-array/with-length/create-byte-iterator-encoder-for-mqtt-packet-uint8-array-with-length';

export function createByteIteratorEncoderForMqttPacketReadonlyStringBuffer(
  input: IReadonlyStringBuffer,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketUint8ArrayWithLength(input.toUint8Array());
}

