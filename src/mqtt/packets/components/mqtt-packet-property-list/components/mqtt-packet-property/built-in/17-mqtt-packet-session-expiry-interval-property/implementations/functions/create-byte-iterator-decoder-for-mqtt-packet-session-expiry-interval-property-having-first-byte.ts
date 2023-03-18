import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_CODE,
} from '../../constants/mqtt-packet-session-expiry-interval-property-code.constant';
import { IMqttPacketSessionExpiryIntervalProperty } from '../../mqtt-packet-session-expiry-interval-property.type';
import { createMqttPacketSessionExpiryIntervalProperty } from '../create-mqtt-packet-session-expiry-interval-property';
import {
  createByteIteratorDecoderForMqttPacketSessionExpiryIntervalPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-session-expiry-interval-property-value';

export function* createByteIteratorDecoderForMqttPacketSessionExpiryIntervalPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketSessionExpiryIntervalProperty> {
  if (firstByte !== MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_CODE) {
    throw new Error(`Not a SessionExpiryInterval property`);
  }
  return createMqttPacketSessionExpiryIntervalProperty(
    yield* createByteIteratorDecoderForMqttPacketSessionExpiryIntervalPropertyValue(),
  );
}

