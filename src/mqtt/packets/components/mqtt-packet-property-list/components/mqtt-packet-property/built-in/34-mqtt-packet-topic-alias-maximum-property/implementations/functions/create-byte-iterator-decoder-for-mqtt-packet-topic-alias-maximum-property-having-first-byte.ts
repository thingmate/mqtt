import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_CODE } from '../../constants/mqtt-packet-topic-alias-maximum-property-code.constant';
import { IMqttPacketTopicAliasMaximumProperty } from '../../mqtt-packet-topic-alias-maximum-property.type';
import { createMqttPacketTopicAliasMaximumProperty } from '../create-mqtt-packet-topic-alias-maximum-property';
import {
  createByteIteratorDecoderForMqttPacketTopicAliasMaximumPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-topic-alias-maximum-property-value';

export function* createByteIteratorDecoderForMqttPacketTopicAliasMaximumPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketTopicAliasMaximumProperty> {
  if (firstByte !== MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_CODE) {
    throw new Error(`Not a TopicAliasMaximum property`);
  }
  return createMqttPacketTopicAliasMaximumProperty(
    yield* createByteIteratorDecoderForMqttPacketTopicAliasMaximumPropertyValue(),
  );
}

