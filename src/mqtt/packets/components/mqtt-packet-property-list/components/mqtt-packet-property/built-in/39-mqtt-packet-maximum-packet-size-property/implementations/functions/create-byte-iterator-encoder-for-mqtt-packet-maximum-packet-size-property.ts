import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketMaximumPacketSizeProperty } from '../../mqtt-packet-maximum-packet-size-property.type';
import {
  createByteIteratorEncoderForMqttPacketMaximumPacketSizePropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-maximum-packet-size-property-value';

export function* createByteIteratorEncoderForMqttPacketMaximumPacketSizeProperty(
  input: IMqttPacketMaximumPacketSizeProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketMaximumPacketSizePropertyValue(input.getValue());
}

