import { IByteIteratorEncoder } from '../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketUint8ArrayWithLength,
} from '../../../../../../functions/shared/uint8-array/with-length/create-byte-iterator-encoder-for-mqtt-packet-uint8-array-with-length';
import { IReadonlyMqttPacketPayload } from '../../../readonly-mqtt-packet-payload.type';

export function createByteIteratorEncoderForReadonlyMqttPacketPayloadWithLength(
  input: IReadonlyMqttPacketPayload,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketUint8ArrayWithLength(input.toUint8Array());
}

