import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/create-byte-iterator-encoder-for-mqtt-packet-boolean';
import { IMqttPacketRetainAvailablePropertyValue } from '../../mqtt-packet-retain-available-property.type';

export function createByteIteratorEncoderForMqttPacketRetainAvailablePropertyValue(
  input: IMqttPacketRetainAvailablePropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketBoolean(input);
}

