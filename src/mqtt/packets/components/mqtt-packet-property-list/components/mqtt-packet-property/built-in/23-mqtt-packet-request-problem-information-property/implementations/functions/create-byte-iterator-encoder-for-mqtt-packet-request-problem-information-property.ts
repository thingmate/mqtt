import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketRequestProblemInformationProperty } from '../../mqtt-packet-request-problem-information-property.type';
import {
  createByteIteratorEncoderForMqttPacketRequestProblemInformationPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-request-problem-information-property-value';

export function* createByteIteratorEncoderForMqttPacketRequestProblemInformationProperty(
  input: IMqttPacketRequestProblemInformationProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketRequestProblemInformationPropertyValue(input.getValue());
}

