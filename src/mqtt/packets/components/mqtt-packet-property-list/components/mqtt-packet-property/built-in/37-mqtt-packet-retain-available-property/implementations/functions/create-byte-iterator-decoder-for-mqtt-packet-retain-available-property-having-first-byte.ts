import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_CODE } from '../../constants/mqtt-packet-retain-available-property-code.constant';
import { IMqttPacketRetainAvailableProperty } from '../../mqtt-packet-retain-available-property.type';
import { createMqttPacketRetainAvailableProperty } from '../create-mqtt-packet-retain-available-property';
import {
  createByteIteratorDecoderForMqttPacketRetainAvailablePropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-retain-available-property-value';

export function* createByteIteratorDecoderForMqttPacketRetainAvailablePropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketRetainAvailableProperty> {
  if (firstByte !== MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_CODE) {
    throw new Error(`Not a RetainAvailable property`);
  }
  return createMqttPacketRetainAvailableProperty(
    yield* createByteIteratorDecoderForMqttPacketRetainAvailablePropertyValue(),
  );
}

