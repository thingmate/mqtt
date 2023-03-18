import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/create-byte-iterator-encoder-for-mqtt-packet-string-buffer';
import { IMqttPacketResponseInformationPropertyValue } from '../../mqtt-packet-response-information-property.type';

export function createByteIteratorEncoderForMqttPacketResponseInformationPropertyValue(
  input: IMqttPacketResponseInformationPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketReadonlyStringBuffer(input);
}

