import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/create-byte-iterator-decoder-for-mqtt-packet-string-buffer';
import { IMqttPacketAssignedClientIdentifierPropertyValue } from '../../mqtt-packet-assigned-client-identifier-property.type';

export function createByteIteratorDecoderForMqttPacketAssignedClientIdentifierPropertyValue(): IByteIteratorDecoder<IMqttPacketAssignedClientIdentifierPropertyValue> {
  return createByteIteratorDecoderForMqttPacketReadonlyStringBuffer();
}

