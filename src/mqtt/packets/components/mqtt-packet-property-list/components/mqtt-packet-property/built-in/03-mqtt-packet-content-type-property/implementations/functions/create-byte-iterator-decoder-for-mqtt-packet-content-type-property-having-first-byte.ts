import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_CONTENT_TYPE_PROPERTY_CODE } from '../../constants/mqtt-packet-content-type-property-code.constant';
import { IMqttPacketContentTypeProperty } from '../../mqtt-packet-content-type-property.type';
import { createMqttPacketContentTypeProperty } from '../create-mqtt-packet-content-type-property';
import {
  createByteIteratorDecoderForMqttPacketContentTypePropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-content-type-property-value';

export function* createByteIteratorDecoderForMqttPacketContentTypePropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketContentTypeProperty> {
  if (firstByte !== MQTT_PACKET_CONTENT_TYPE_PROPERTY_CODE) {
    throw new Error(`Not a ContentType property`);
  }
  return createMqttPacketContentTypeProperty(
    yield* createByteIteratorDecoderForMqttPacketContentTypePropertyValue(),
  );
}

