import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE,
} from '../../constants/mqtt-packet-wildcard-subscription-available-property-code.constant';
import { IMqttPacketWildcardSubscriptionAvailableProperty } from '../../mqtt-packet-wildcard-subscription-available-property.type';
import { createMqttPacketWildcardSubscriptionAvailableProperty } from '../create-mqtt-packet-wildcard-subscription-available-property';
import {
  createByteIteratorDecoderForMqttPacketWildcardSubscriptionAvailablePropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-wildcard-subscription-available-property-value';

export function* createByteIteratorDecoderForMqttPacketWildcardSubscriptionAvailablePropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketWildcardSubscriptionAvailableProperty> {
  if (firstByte !== MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE) {
    throw new Error(`Not a WildcardSubscriptionAvailable property`);
  }
  return createMqttPacketWildcardSubscriptionAvailableProperty(
    yield* createByteIteratorDecoderForMqttPacketWildcardSubscriptionAvailablePropertyValue(),
  );
}

