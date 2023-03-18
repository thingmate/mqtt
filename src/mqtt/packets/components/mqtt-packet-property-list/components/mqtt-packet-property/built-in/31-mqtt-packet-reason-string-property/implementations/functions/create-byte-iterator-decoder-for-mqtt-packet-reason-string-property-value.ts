import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/create-byte-iterator-decoder-for-mqtt-packet-string-buffer';
import { IMqttPacketReasonStringPropertyValue } from '../../mqtt-packet-reason-string-property.type';

export function createByteIteratorDecoderForMqttPacketReasonStringPropertyValue(): IByteIteratorDecoder<IMqttPacketReasonStringPropertyValue> {
  return createByteIteratorDecoderForMqttPacketReadonlyStringBuffer();
}

