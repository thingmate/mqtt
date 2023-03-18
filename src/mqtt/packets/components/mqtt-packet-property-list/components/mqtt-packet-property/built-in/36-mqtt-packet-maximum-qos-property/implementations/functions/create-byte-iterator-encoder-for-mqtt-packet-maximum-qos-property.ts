import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketMaximumQoSProperty } from '../../mqtt-packet-maximum-qos-property.type';
import {
  createByteIteratorEncoderForMqttPacketMaximumQoSPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-maximum-qos-property-value';

export function* createByteIteratorEncoderForMqttPacketMaximumQoSProperty(
  input: IMqttPacketMaximumQoSProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketMaximumQoSPropertyValue(input.getValue());
}

