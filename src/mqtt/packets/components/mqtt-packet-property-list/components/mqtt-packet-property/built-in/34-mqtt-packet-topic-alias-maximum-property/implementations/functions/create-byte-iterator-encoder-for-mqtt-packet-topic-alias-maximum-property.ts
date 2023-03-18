import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketTopicAliasMaximumProperty } from '../../mqtt-packet-topic-alias-maximum-property.type';
import {
  createByteIteratorEncoderForMqttPacketTopicAliasMaximumPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-topic-alias-maximum-property-value';

export function* createByteIteratorEncoderForMqttPacketTopicAliasMaximumProperty(
  input: IMqttPacketTopicAliasMaximumProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketTopicAliasMaximumPropertyValue(input.getValue());
}

