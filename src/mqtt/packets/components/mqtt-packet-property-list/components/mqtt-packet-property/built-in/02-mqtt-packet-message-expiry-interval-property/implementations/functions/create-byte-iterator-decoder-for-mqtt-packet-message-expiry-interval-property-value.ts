import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketU32,
} from '../../../../../../../../functions/shared/number/u32/create-byte-iterator-decoder-for-mqtt-packet-u32';
import { IMqttPacketMessageExpiryIntervalPropertyValue } from '../../mqtt-packet-message-expiry-interval-property.type';

export function createByteIteratorDecoderForMqttPacketMessageExpiryIntervalPropertyValue(): IByteIteratorDecoder<IMqttPacketMessageExpiryIntervalPropertyValue> {
  return createByteIteratorDecoderForMqttPacketU32();
}

