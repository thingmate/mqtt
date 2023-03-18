import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_CODE,
} from '../../constants/mqtt-packet-subscription-identifiers-available-property-code.constant';
import { IMqttPacketSubscriptionIdentifiersAvailableProperty } from '../../mqtt-packet-subscription-identifiers-available-property.type';
import {
  createMqttPacketSubscriptionIdentifiersAvailableProperty,
} from '../create-mqtt-packet-subscription-identifiers-available-property';
import {
  createByteIteratorDecoderForMqttPacketSubscriptionIdentifiersAvailablePropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-subscription-identifiers-available-property-value';

export function* createByteIteratorDecoderForMqttPacketSubscriptionIdentifiersAvailablePropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketSubscriptionIdentifiersAvailableProperty> {
  if (firstByte !== MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_CODE) {
    throw new Error(`Not a SubscriptionIdentifiersAvailable property`);
  }
  return createMqttPacketSubscriptionIdentifiersAvailableProperty(
    yield* createByteIteratorDecoderForMqttPacketSubscriptionIdentifiersAvailablePropertyValue(),
  );
}

