import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketU16,
} from '../../../../../../../../functions/shared/number/u16/create-byte-iterator-encoder-for-mqtt-packet-u16';
import { IMqttPacketTopicAliasPropertyValue } from '../../mqtt-packet-topic-alias-property.type';

export function createByteIteratorEncoderForMqttPacketTopicAliasPropertyValue(
  input: IMqttPacketTopicAliasPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketU16(input);
}

