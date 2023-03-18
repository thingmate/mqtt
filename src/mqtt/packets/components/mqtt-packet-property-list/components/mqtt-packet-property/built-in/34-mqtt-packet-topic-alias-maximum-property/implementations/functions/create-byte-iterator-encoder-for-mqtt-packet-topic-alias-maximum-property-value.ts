import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketU16,
} from '../../../../../../../../functions/shared/number/u16/create-byte-iterator-encoder-for-mqtt-packet-u16';
import { IMqttPacketTopicAliasMaximumPropertyValue } from '../../mqtt-packet-topic-alias-maximum-property.type';

export function createByteIteratorEncoderForMqttPacketTopicAliasMaximumPropertyValue(
  input: IMqttPacketTopicAliasMaximumPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketU16(input);
}

