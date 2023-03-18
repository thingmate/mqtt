import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketReceiveMaximumProperty } from '../../mqtt-packet-receive-maximum-property.type';
import {
  createByteIteratorEncoderForMqttPacketReceiveMaximumPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-receive-maximum-property-value';

export function* createByteIteratorEncoderForMqttPacketReceiveMaximumProperty(
  input: IMqttPacketReceiveMaximumProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketReceiveMaximumPropertyValue(input.getValue());
}

