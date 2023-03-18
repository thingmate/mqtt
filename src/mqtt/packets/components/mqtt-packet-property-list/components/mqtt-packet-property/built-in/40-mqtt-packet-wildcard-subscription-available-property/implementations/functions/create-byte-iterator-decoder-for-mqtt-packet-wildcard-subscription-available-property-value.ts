import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/create-byte-iterator-decoder-for-mqtt-packet-boolean';
import { IMqttPacketWildcardSubscriptionAvailablePropertyValue } from '../../mqtt-packet-wildcard-subscription-available-property.type';

export function createByteIteratorDecoderForMqttPacketWildcardSubscriptionAvailablePropertyValue(): IByteIteratorDecoder<IMqttPacketWildcardSubscriptionAvailablePropertyValue> {
  return createByteIteratorDecoderForMqttPacketBoolean();
}

