import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketWildcardSubscriptionAvailableProperty } from '../../mqtt-packet-wildcard-subscription-available-property.type';
import {
  createByteIteratorEncoderForMqttPacketWildcardSubscriptionAvailablePropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-wildcard-subscription-available-property-value';

export function* createByteIteratorEncoderForMqttPacketWildcardSubscriptionAvailableProperty(
  input: IMqttPacketWildcardSubscriptionAvailableProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketWildcardSubscriptionAvailablePropertyValue(input.getValue());
}

