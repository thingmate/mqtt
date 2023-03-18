import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_CODE,
} from '../../constants/mqtt-packet-request-response-information-property-code.constant';
import { IMqttPacketRequestResponseInformationProperty } from '../../mqtt-packet-request-response-information-property.type';
import { createMqttPacketRequestResponseInformationProperty } from '../create-mqtt-packet-request-response-information-property';
import {
  createByteIteratorDecoderForMqttPacketRequestResponseInformationPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-request-response-information-property-value';

export function* createByteIteratorDecoderForMqttPacketRequestResponseInformationPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketRequestResponseInformationProperty> {
  if (firstByte !== MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_CODE) {
    throw new Error(`Not a RequestResponseInformation property`);
  }
  return createMqttPacketRequestResponseInformationProperty(
    yield* createByteIteratorDecoderForMqttPacketRequestResponseInformationPropertyValue(),
  );
}

