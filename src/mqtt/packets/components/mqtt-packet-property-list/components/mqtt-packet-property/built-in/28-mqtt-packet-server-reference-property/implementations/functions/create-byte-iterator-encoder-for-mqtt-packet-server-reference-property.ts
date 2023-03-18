import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketServerReferenceProperty } from '../../mqtt-packet-server-reference-property.type';
import {
  createByteIteratorEncoderForMqttPacketServerReferencePropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-server-reference-property-value';

export function* createByteIteratorEncoderForMqttPacketServerReferenceProperty(
  input: IMqttPacketServerReferenceProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketServerReferencePropertyValue(input.getValue());
}

