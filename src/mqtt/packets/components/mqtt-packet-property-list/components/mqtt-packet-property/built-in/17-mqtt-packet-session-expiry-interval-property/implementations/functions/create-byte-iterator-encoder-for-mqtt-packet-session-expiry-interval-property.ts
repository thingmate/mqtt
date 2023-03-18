import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketSessionExpiryIntervalProperty } from '../../mqtt-packet-session-expiry-interval-property.type';
import {
  createByteIteratorEncoderForMqttPacketSessionExpiryIntervalPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-session-expiry-interval-property-value';

export function* createByteIteratorEncoderForMqttPacketSessionExpiryIntervalProperty(
  input: IMqttPacketSessionExpiryIntervalProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketSessionExpiryIntervalPropertyValue(input.getValue());
}

