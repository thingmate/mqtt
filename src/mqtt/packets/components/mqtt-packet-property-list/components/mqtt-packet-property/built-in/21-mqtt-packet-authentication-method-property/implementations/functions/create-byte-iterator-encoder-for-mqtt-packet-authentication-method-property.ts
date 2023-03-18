import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketAuthenticationMethodProperty } from '../../mqtt-packet-authentication-method-property.type';
import {
  createByteIteratorEncoderForMqttPacketAuthenticationMethodPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-authentication-method-property-value';

export function* createByteIteratorEncoderForMqttPacketAuthenticationMethodProperty(
  input: IMqttPacketAuthenticationMethodProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketAuthenticationMethodPropertyValue(input.getValue());
}

