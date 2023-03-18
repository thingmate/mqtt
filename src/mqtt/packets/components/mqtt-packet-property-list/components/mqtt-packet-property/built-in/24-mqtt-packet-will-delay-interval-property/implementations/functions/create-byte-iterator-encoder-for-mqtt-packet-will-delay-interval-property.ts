import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketWillDelayIntervalProperty } from '../../mqtt-packet-will-delay-interval-property.type';
import {
  createByteIteratorEncoderForMqttPacketWillDelayIntervalPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-will-delay-interval-property-value';

export function* createByteIteratorEncoderForMqttPacketWillDelayIntervalProperty(
  input: IMqttPacketWillDelayIntervalProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketWillDelayIntervalPropertyValue(input.getValue());
}

