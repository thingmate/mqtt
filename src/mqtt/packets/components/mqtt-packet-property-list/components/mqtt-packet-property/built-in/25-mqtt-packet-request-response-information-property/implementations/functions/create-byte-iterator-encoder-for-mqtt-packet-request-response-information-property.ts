import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketRequestResponseInformationProperty } from '../../mqtt-packet-request-response-information-property.type';
import {
  createByteIteratorEncoderForMqttPacketRequestResponseInformationPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-request-response-information-property-value';

export function* createByteIteratorEncoderForMqttPacketRequestResponseInformationProperty(
  input: IMqttPacketRequestResponseInformationProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketRequestResponseInformationPropertyValue(input.getValue());
}

