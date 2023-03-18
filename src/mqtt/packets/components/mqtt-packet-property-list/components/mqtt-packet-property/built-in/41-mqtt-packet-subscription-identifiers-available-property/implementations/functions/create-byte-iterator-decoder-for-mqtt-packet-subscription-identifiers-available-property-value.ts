import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/create-byte-iterator-decoder-for-mqtt-packet-boolean';
import {
  IMqttPacketSubscriptionIdentifiersAvailablePropertyValue,
} from '../../mqtt-packet-subscription-identifiers-available-property.type';

export function createByteIteratorDecoderForMqttPacketSubscriptionIdentifiersAvailablePropertyValue(): IByteIteratorDecoder<IMqttPacketSubscriptionIdentifiersAvailablePropertyValue> {
  return createByteIteratorDecoderForMqttPacketBoolean();
}

