import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/create-byte-iterator-decoder-for-mqtt-packet-string-buffer';
import { IMqttPacketResponseInformationPropertyValue } from '../../mqtt-packet-response-information-property.type';

export function createByteIteratorDecoderForMqttPacketResponseInformationPropertyValue(): IByteIteratorDecoder<IMqttPacketResponseInformationPropertyValue> {
  return createByteIteratorDecoderForMqttPacketReadonlyStringBuffer();
}

