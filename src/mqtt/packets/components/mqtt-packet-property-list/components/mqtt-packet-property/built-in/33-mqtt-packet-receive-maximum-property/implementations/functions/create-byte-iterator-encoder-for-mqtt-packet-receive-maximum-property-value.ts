import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketU16,
} from '../../../../../../../../functions/shared/number/u16/create-byte-iterator-encoder-for-mqtt-packet-u16';
import { IMqttPacketReceiveMaximumPropertyValue } from '../../mqtt-packet-receive-maximum-property.type';

export function createByteIteratorEncoderForMqttPacketReceiveMaximumPropertyValue(
  input: IMqttPacketReceiveMaximumPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketU16(input);
}

