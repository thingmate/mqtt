import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/create-byte-iterator-decoder-for-mqtt-packet-boolean';
import { IMqttPacketSharedSubscriptionAvailablePropertyValue } from '../../mqtt-packet-shared-subscription-available-property.type';

export function createByteIteratorDecoderForMqttPacketSharedSubscriptionAvailablePropertyValue(): IByteIteratorDecoder<IMqttPacketSharedSubscriptionAvailablePropertyValue> {
  return createByteIteratorDecoderForMqttPacketBoolean();
}

