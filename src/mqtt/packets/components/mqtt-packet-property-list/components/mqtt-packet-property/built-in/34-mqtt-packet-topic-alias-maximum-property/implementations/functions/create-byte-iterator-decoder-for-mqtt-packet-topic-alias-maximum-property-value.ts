import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketU16,
} from '../../../../../../../../functions/shared/number/u16/create-byte-iterator-decoder-for-mqtt-packet-u16';
import { IMqttPacketTopicAliasMaximumPropertyValue } from '../../mqtt-packet-topic-alias-maximum-property.type';

export function createByteIteratorDecoderForMqttPacketTopicAliasMaximumPropertyValue(): IByteIteratorDecoder<IMqttPacketTopicAliasMaximumPropertyValue> {
  return createByteIteratorDecoderForMqttPacketU16();
}

