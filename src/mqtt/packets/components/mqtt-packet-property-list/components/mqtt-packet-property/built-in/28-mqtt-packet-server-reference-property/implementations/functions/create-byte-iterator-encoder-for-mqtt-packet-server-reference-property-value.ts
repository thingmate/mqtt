import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/create-byte-iterator-encoder-for-mqtt-packet-string-buffer';
import { IMqttPacketServerReferencePropertyValue } from '../../mqtt-packet-server-reference-property.type';

export function createByteIteratorEncoderForMqttPacketServerReferencePropertyValue(
  input: IMqttPacketServerReferencePropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketReadonlyStringBuffer(input);
}

