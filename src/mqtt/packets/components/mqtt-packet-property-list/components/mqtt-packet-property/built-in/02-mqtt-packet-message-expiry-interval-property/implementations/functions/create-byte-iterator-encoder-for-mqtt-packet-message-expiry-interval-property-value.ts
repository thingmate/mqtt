import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketU32,
} from '../../../../../../../../functions/shared/number/u32/create-byte-iterator-encoder-for-mqtt-packet-u32';
import { IMqttPacketMessageExpiryIntervalPropertyValue } from '../../mqtt-packet-message-expiry-interval-property.type';

export function createByteIteratorEncoderForMqttPacketMessageExpiryIntervalPropertyValue(
  input: IMqttPacketMessageExpiryIntervalPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketU32(input);
}

