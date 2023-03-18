import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/create-byte-iterator-encoder-for-mqtt-packet-boolean';
import { IMqttPacketRequestResponseInformationPropertyValue } from '../../mqtt-packet-request-response-information-property.type';

export function createByteIteratorEncoderForMqttPacketRequestResponseInformationPropertyValue(
  input: IMqttPacketRequestResponseInformationPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketBoolean(input);
}

