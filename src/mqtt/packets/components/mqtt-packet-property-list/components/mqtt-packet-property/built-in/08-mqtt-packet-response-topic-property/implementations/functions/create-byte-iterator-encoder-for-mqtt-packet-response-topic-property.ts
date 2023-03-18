import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketResponseTopicProperty } from '../../mqtt-packet-response-topic-property.type';
import {
  createByteIteratorEncoderForMqttPacketResponseTopicPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-response-topic-property-value';

export function* createByteIteratorEncoderForMqttPacketResponseTopicProperty(
  input: IMqttPacketResponseTopicProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketResponseTopicPropertyValue(input.getValue());
}

