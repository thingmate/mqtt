import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketU32,
} from '../../../../../../../../functions/shared/number/u32/create-byte-iterator-decoder-for-mqtt-packet-u32';
import { IMqttPacketSessionExpiryIntervalPropertyValue } from '../../mqtt-packet-session-expiry-interval-property.type';

export function createByteIteratorDecoderForMqttPacketSessionExpiryIntervalPropertyValue(): IByteIteratorDecoder<IMqttPacketSessionExpiryIntervalPropertyValue> {
  return createByteIteratorDecoderForMqttPacketU32();
}

