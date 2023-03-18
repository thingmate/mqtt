import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketMessageExpiryIntervalProperty } from '../../mqtt-packet-message-expiry-interval-property.type';
import {
  createByteIteratorEncoderForMqttPacketMessageExpiryIntervalPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-message-expiry-interval-property-value';

export function* createByteIteratorEncoderForMqttPacketMessageExpiryIntervalProperty(
  input: IMqttPacketMessageExpiryIntervalProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketMessageExpiryIntervalPropertyValue(input.getValue());
}

