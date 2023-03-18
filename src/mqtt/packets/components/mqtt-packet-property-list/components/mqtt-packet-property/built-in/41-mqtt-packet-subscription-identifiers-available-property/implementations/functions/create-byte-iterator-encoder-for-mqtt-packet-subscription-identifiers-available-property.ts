import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketSubscriptionIdentifiersAvailableProperty } from '../../mqtt-packet-subscription-identifiers-available-property.type';
import {
  createByteIteratorEncoderForMqttPacketSubscriptionIdentifiersAvailablePropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-subscription-identifiers-available-property-value';

export function* createByteIteratorEncoderForMqttPacketSubscriptionIdentifiersAvailableProperty(
  input: IMqttPacketSubscriptionIdentifiersAvailableProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketSubscriptionIdentifiersAvailablePropertyValue(input.getValue());
}

