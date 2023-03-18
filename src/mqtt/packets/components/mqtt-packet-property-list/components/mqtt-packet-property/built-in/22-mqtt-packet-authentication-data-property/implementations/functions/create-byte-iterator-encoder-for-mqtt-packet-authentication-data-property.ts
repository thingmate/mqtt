import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketAuthenticationDataProperty } from '../../mqtt-packet-authentication-data-property.type';
import {
  createByteIteratorEncoderForMqttPacketAuthenticationDataPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-authentication-data-property-value';

export function* createByteIteratorEncoderForMqttPacketAuthenticationDataProperty(
  input: IMqttPacketAuthenticationDataProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketAuthenticationDataPropertyValue(input.getValue());
}

