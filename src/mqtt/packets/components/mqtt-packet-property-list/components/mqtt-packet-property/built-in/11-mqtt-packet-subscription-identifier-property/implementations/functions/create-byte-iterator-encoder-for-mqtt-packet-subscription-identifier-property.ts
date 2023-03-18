import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketSubscriptionIdentifierProperty } from '../../mqtt-packet-subscription-identifier-property.type';
import {
  createByteIteratorEncoderForMqttPacketSubscriptionIdentifierPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-subscription-identifier-property-value';

export function* createByteIteratorEncoderForMqttPacketSubscriptionIdentifierProperty(
  input: IMqttPacketSubscriptionIdentifierProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketSubscriptionIdentifierPropertyValue(input.getValue());
}

