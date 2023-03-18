import { IByteIteratorEncoder } from '../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketUint8Array,
} from '../../../../../functions/shared/uint8-array/create-byte-iterator-encoder-for-mqtt-packet-uint8-array';
import { IReadonlyMqttPacketPayload } from '../../readonly-mqtt-packet-payload.type';

export function createByteIteratorEncoderForReadonlyMqttPacketPayload(
  input: IReadonlyMqttPacketPayload,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketUint8Array(input.toUint8Array());
}

