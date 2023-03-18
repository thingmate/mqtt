import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketVariableByteInteger,
} from '../../../../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-encoder-for-mqtt-packet-variable-byte-integer';
import { IMqttPacketSubscriptionIdentifierPropertyValue } from '../../mqtt-packet-subscription-identifier-property.type';

export function createByteIteratorEncoderForMqttPacketSubscriptionIdentifierPropertyValue(
  input: IMqttPacketSubscriptionIdentifierPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketVariableByteInteger(input);
}

