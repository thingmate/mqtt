import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketU32,
} from '../../../../../../../../functions/shared/number/u32/create-byte-iterator-encoder-for-mqtt-packet-u32';
import { IMqttPacketMaximumPacketSizePropertyValue } from '../../mqtt-packet-maximum-packet-size-property.type';

export function createByteIteratorEncoderForMqttPacketMaximumPacketSizePropertyValue(
  input: IMqttPacketMaximumPacketSizePropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketU32(input);
}

