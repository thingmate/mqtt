import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketCorrelationDataProperty } from '../../mqtt-packet-correlation-data-property.type';
import {
  createByteIteratorEncoderForMqttPacketCorrelationDataPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-correlation-data-property-value';

export function* createByteIteratorEncoderForMqttPacketCorrelationDataProperty(
  input: IMqttPacketCorrelationDataProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketCorrelationDataPropertyValue(input.getValue());
}

