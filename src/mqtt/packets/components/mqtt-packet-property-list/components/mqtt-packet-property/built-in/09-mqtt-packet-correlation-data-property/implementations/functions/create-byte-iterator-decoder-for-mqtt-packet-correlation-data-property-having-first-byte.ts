import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_CORRELATION_DATA_PROPERTY_CODE } from '../../constants/mqtt-packet-correlation-data-property-code.constant';
import { IMqttPacketCorrelationDataProperty } from '../../mqtt-packet-correlation-data-property.type';
import { createMqttPacketCorrelationDataProperty } from '../create-mqtt-packet-correlation-data-property';
import {
  createByteIteratorDecoderForMqttPacketCorrelationDataPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-correlation-data-property-value';

export function* createByteIteratorDecoderForMqttPacketCorrelationDataPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketCorrelationDataProperty> {
  if (firstByte !== MQTT_PACKET_CORRELATION_DATA_PROPERTY_CODE) {
    throw new Error(`Not a CorrelationData property`);
  }
  return createMqttPacketCorrelationDataProperty(
    yield* createByteIteratorDecoderForMqttPacketCorrelationDataPropertyValue(),
  );
}

