import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/create-byte-iterator-encoder-for-mqtt-packet-boolean';
import { IMqttPacketWildcardSubscriptionAvailablePropertyValue } from '../../mqtt-packet-wildcard-subscription-available-property.type';

export function createByteIteratorEncoderForMqttPacketWildcardSubscriptionAvailablePropertyValue(
  input: IMqttPacketWildcardSubscriptionAvailablePropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketBoolean(input);
}

