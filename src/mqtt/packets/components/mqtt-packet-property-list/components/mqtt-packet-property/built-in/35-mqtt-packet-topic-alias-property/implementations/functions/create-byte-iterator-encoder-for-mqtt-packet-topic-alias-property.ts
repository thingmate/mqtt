import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketTopicAliasProperty } from '../../mqtt-packet-topic-alias-property.type';
import {
  createByteIteratorEncoderForMqttPacketTopicAliasPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-topic-alias-property-value';

export function* createByteIteratorEncoderForMqttPacketTopicAliasProperty(
  input: IMqttPacketTopicAliasProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketTopicAliasPropertyValue(input.getValue());
}

