import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_CODE } from '../../constants/mqtt-packet-authentication-method-property-code.constant';
import { IMqttPacketAuthenticationMethodProperty } from '../../mqtt-packet-authentication-method-property.type';
import { createMqttPacketAuthenticationMethodProperty } from '../create-mqtt-packet-authentication-method-property';
import {
  createByteIteratorDecoderForMqttPacketAuthenticationMethodPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-authentication-method-property-value';

export function* createByteIteratorDecoderForMqttPacketAuthenticationMethodPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketAuthenticationMethodProperty> {
  if (firstByte !== MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_CODE) {
    throw new Error(`Not a AuthenticationMethod property`);
  }
  return createMqttPacketAuthenticationMethodProperty(
    yield* createByteIteratorDecoderForMqttPacketAuthenticationMethodPropertyValue(),
  );
}

