import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_CODE,
} from '../../constants/mqtt-packet-subscription-identifier-property-code.constant';
import { IMqttPacketSubscriptionIdentifierProperty } from '../../mqtt-packet-subscription-identifier-property.type';
import { createMqttPacketSubscriptionIdentifierProperty } from '../create-mqtt-packet-subscription-identifier-property';
import {
  createByteIteratorDecoderForMqttPacketSubscriptionIdentifierPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-subscription-identifier-property-value';

export function* createByteIteratorDecoderForMqttPacketSubscriptionIdentifierPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketSubscriptionIdentifierProperty> {
  if (firstByte !== MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_CODE) {
    throw new Error(`Not a SubscriptionIdentifier property`);
  }
  return createMqttPacketSubscriptionIdentifierProperty(
    yield* createByteIteratorDecoderForMqttPacketSubscriptionIdentifierPropertyValue(),
  );
}

