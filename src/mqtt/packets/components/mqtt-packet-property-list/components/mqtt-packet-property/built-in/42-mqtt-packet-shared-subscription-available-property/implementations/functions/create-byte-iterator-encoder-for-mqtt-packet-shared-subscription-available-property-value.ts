import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/create-byte-iterator-encoder-for-mqtt-packet-boolean';
import { IMqttPacketSharedSubscriptionAvailablePropertyValue } from '../../mqtt-packet-shared-subscription-available-property.type';

export function createByteIteratorEncoderForMqttPacketSharedSubscriptionAvailablePropertyValue(
  input: IMqttPacketSharedSubscriptionAvailablePropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketBoolean(input);
}

