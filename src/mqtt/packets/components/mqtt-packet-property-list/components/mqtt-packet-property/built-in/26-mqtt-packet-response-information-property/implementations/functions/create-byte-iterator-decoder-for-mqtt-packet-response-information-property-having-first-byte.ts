import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_CODE } from '../../constants/mqtt-packet-response-information-property-code.constant';
import { IMqttPacketResponseInformationProperty } from '../../mqtt-packet-response-information-property.type';
import { createMqttPacketResponseInformationProperty } from '../create-mqtt-packet-response-information-property';
import {
  createByteIteratorDecoderForMqttPacketResponseInformationPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-response-information-property-value';

export function* createByteIteratorDecoderForMqttPacketResponseInformationPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketResponseInformationProperty> {
  if (firstByte !== MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_CODE) {
    throw new Error(`Not a ResponseInformation property`);
  }
  return createMqttPacketResponseInformationProperty(
    yield* createByteIteratorDecoderForMqttPacketResponseInformationPropertyValue(),
  );
}

