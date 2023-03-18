import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/create-byte-iterator-encoder-for-mqtt-packet-boolean';
import {
  IMqttPacketSubscriptionIdentifiersAvailablePropertyValue,
} from '../../mqtt-packet-subscription-identifiers-available-property.type';

export function createByteIteratorEncoderForMqttPacketSubscriptionIdentifiersAvailablePropertyValue(
  input: IMqttPacketSubscriptionIdentifiersAvailablePropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketBoolean(input);
}

