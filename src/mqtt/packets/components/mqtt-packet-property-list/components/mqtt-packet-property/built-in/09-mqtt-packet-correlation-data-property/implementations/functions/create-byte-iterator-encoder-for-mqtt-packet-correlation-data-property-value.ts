import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketUint8ArrayWithLength,
} from '../../../../../../../../functions/shared/uint8-array/with-length/create-byte-iterator-encoder-for-mqtt-packet-uint8-array-with-length';
import { IMqttPacketCorrelationDataPropertyValue } from '../../mqtt-packet-correlation-data-property.type';

export function createByteIteratorEncoderForMqttPacketCorrelationDataPropertyValue(
  input: IMqttPacketCorrelationDataPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketUint8ArrayWithLength(input);
}

