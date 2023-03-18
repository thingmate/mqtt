import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE,
} from '../../constants/mqtt-packet-shared-subscription-available-property-code.constant';
import { IMqttPacketSharedSubscriptionAvailableProperty } from '../../mqtt-packet-shared-subscription-available-property.type';
import { createMqttPacketSharedSubscriptionAvailableProperty } from '../create-mqtt-packet-shared-subscription-available-property';
import {
  createByteIteratorDecoderForMqttPacketSharedSubscriptionAvailablePropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-shared-subscription-available-property-value';

export function* createByteIteratorDecoderForMqttPacketSharedSubscriptionAvailablePropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketSharedSubscriptionAvailableProperty> {
  if (firstByte !== MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE) {
    throw new Error(`Not a SharedSubscriptionAvailable property`);
  }
  return createMqttPacketSharedSubscriptionAvailableProperty(
    yield* createByteIteratorDecoderForMqttPacketSharedSubscriptionAvailablePropertyValue(),
  );
}

