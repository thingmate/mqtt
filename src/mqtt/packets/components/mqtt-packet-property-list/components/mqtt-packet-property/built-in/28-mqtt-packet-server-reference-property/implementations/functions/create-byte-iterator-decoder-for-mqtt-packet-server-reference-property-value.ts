import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/create-byte-iterator-decoder-for-mqtt-packet-string-buffer';
import { IMqttPacketServerReferencePropertyValue } from '../../mqtt-packet-server-reference-property.type';

export function createByteIteratorDecoderForMqttPacketServerReferencePropertyValue(): IByteIteratorDecoder<IMqttPacketServerReferencePropertyValue> {
  return createByteIteratorDecoderForMqttPacketReadonlyStringBuffer();
}

