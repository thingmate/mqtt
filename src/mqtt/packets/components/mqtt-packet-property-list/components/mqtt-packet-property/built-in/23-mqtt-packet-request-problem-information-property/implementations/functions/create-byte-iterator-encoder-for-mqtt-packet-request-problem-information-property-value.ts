import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/create-byte-iterator-encoder-for-mqtt-packet-boolean';
import { IMqttPacketRequestProblemInformationPropertyValue } from '../../mqtt-packet-request-problem-information-property.type';

export function createByteIteratorEncoderForMqttPacketRequestProblemInformationPropertyValue(
  input: IMqttPacketRequestProblemInformationPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketBoolean(input);
}

