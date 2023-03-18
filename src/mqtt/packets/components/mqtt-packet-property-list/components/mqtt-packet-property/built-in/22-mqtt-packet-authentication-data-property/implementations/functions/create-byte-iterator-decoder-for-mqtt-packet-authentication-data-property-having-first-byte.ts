import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_CODE } from '../../constants/mqtt-packet-authentication-data-property-code.constant';
import { IMqttPacketAuthenticationDataProperty } from '../../mqtt-packet-authentication-data-property.type';
import { createMqttPacketAuthenticationDataProperty } from '../create-mqtt-packet-authentication-data-property';
import {
  createByteIteratorDecoderForMqttPacketAuthenticationDataPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-authentication-data-property-value';

export function* createByteIteratorDecoderForMqttPacketAuthenticationDataPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketAuthenticationDataProperty> {
  if (firstByte !== MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_CODE) {
    throw new Error(`Not a AuthenticationData property`);
  }
  return createMqttPacketAuthenticationDataProperty(
    yield* createByteIteratorDecoderForMqttPacketAuthenticationDataPropertyValue(),
  );
}

