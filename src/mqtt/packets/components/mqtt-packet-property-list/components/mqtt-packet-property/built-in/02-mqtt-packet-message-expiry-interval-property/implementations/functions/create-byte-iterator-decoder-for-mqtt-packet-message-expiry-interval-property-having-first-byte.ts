import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_CODE,
} from '../../constants/mqtt-packet-message-expiry-interval-property-code.constant';
import { IMqttPacketMessageExpiryIntervalProperty } from '../../mqtt-packet-message-expiry-interval-property.type';
import { createMqttPacketMessageExpiryIntervalProperty } from '../create-mqtt-packet-message-expiry-interval-property';
import {
  createByteIteratorDecoderForMqttPacketMessageExpiryIntervalPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-message-expiry-interval-property-value';

export function* createByteIteratorDecoderForMqttPacketMessageExpiryIntervalPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketMessageExpiryIntervalProperty> {
  if (firstByte !== MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_CODE) {
    throw new Error(`Not a MessageExpiryInterval property`);
  }
  return createMqttPacketMessageExpiryIntervalProperty(
    yield* createByteIteratorDecoderForMqttPacketMessageExpiryIntervalPropertyValue(),
  );
}

