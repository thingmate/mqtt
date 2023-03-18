import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketResponseInformationProperty } from '../../mqtt-packet-response-information-property.type';
import {
  createByteIteratorEncoderForMqttPacketResponseInformationPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-response-information-property-value';

export function* createByteIteratorEncoderForMqttPacketResponseInformationProperty(
  input: IMqttPacketResponseInformationProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketResponseInformationPropertyValue(input.getValue());
}

