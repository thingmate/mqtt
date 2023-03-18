import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketU16,
} from '../../../../../../../../functions/shared/number/u16/create-byte-iterator-encoder-for-mqtt-packet-u16';
import { IMqttPacketMaximumQoSPropertyValue } from '../../mqtt-packet-maximum-qos-property.type';

export function createByteIteratorEncoderForMqttPacketMaximumQoSPropertyValue(
  input: IMqttPacketMaximumQoSPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketU16(input);
}

