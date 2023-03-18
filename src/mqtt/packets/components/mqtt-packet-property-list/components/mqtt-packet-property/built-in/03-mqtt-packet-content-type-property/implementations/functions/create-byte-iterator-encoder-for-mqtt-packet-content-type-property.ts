import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketContentTypeProperty } from '../../mqtt-packet-content-type-property.type';
import {
  createByteIteratorEncoderForMqttPacketContentTypePropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-content-type-property-value';

export function* createByteIteratorEncoderForMqttPacketContentTypeProperty(
  input: IMqttPacketContentTypeProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketContentTypePropertyValue(input.getValue());
}

