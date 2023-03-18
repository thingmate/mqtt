import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketVariableByteInteger,
} from '../../../../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-decoder-for-mqtt-packet-variable-byte-integer';
import { IMqttPacketSubscriptionIdentifierPropertyValue } from '../../mqtt-packet-subscription-identifier-property.type';

export function createByteIteratorDecoderForMqttPacketSubscriptionIdentifierPropertyValue(): IByteIteratorDecoder<IMqttPacketSubscriptionIdentifierPropertyValue> {
  return createByteIteratorDecoderForMqttPacketVariableByteInteger();
}

