import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketU16,
} from '../../../../../../../../functions/shared/number/u16/create-byte-iterator-decoder-for-mqtt-packet-u16';
import { IMqttPacketTopicAliasPropertyValue } from '../../mqtt-packet-topic-alias-property.type';

export function createByteIteratorDecoderForMqttPacketTopicAliasPropertyValue(): IByteIteratorDecoder<IMqttPacketTopicAliasPropertyValue> {
  return createByteIteratorDecoderForMqttPacketU16();
}

