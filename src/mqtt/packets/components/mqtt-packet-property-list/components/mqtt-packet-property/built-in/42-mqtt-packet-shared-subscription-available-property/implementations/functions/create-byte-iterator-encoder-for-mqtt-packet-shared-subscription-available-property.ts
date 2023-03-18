import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketSharedSubscriptionAvailableProperty } from '../../mqtt-packet-shared-subscription-available-property.type';
import {
  createByteIteratorEncoderForMqttPacketSharedSubscriptionAvailablePropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-shared-subscription-available-property-value';

export function* createByteIteratorEncoderForMqttPacketSharedSubscriptionAvailableProperty(
  input: IMqttPacketSharedSubscriptionAvailableProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketSharedSubscriptionAvailablePropertyValue(input.getValue());
}

