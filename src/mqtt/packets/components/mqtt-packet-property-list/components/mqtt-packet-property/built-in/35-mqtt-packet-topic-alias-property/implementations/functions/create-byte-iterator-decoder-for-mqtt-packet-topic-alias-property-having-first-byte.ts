import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_TOPIC_ALIAS_PROPERTY_CODE } from '../../constants/mqtt-packet-topic-alias-property-code.constant';
import { IMqttPacketTopicAliasProperty } from '../../mqtt-packet-topic-alias-property.type';
import { createMqttPacketTopicAliasProperty } from '../create-mqtt-packet-topic-alias-property';
import {
  createByteIteratorDecoderForMqttPacketTopicAliasPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-topic-alias-property-value';

export function* createByteIteratorDecoderForMqttPacketTopicAliasPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketTopicAliasProperty> {
  if (firstByte !== MQTT_PACKET_TOPIC_ALIAS_PROPERTY_CODE) {
    throw new Error(`Not a TopicAlias property`);
  }
  return createMqttPacketTopicAliasProperty(
    yield* createByteIteratorDecoderForMqttPacketTopicAliasPropertyValue(),
  );
}

