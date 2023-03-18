import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketU32,
} from '../../../../../../../../functions/shared/number/u32/create-byte-iterator-encoder-for-mqtt-packet-u32';
import { IMqttPacketSessionExpiryIntervalPropertyValue } from '../../mqtt-packet-session-expiry-interval-property.type';

export function createByteIteratorEncoderForMqttPacketSessionExpiryIntervalPropertyValue(
  input: IMqttPacketSessionExpiryIntervalPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketU32(input);
}

