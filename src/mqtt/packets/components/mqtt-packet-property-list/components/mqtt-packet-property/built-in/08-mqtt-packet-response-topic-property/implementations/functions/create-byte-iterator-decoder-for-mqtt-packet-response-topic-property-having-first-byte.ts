import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_CODE } from '../../constants/mqtt-packet-response-topic-property-code.constant';
import { IMqttPacketResponseTopicProperty } from '../../mqtt-packet-response-topic-property.type';
import { createMqttPacketResponseTopicProperty } from '../create-mqtt-packet-response-topic-property';
import {
  createByteIteratorDecoderForMqttPacketResponseTopicPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-response-topic-property-value';

export function* createByteIteratorDecoderForMqttPacketResponseTopicPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketResponseTopicProperty> {
  if (firstByte !== MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_CODE) {
    throw new Error(`Not a ResponseTopic property`);
  }
  return createMqttPacketResponseTopicProperty(
    yield* createByteIteratorDecoderForMqttPacketResponseTopicPropertyValue(),
  );
}

