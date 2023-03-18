import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_USER_PROPERTY_CODE } from '../../constants/mqtt-packet-user-property-code.constant';
import { IMqttPacketUserProperty } from '../../mqtt-packet-user-property.type';
import { createMqttPacketUserProperty } from '../create-mqtt-packet-user-property';
import {
  createByteIteratorDecoderForMqttPacketUserPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-user-property-value';

export function* createByteIteratorDecoderForMqttPacketUserPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketUserProperty> {
  if (firstByte !== MQTT_PACKET_USER_PROPERTY_CODE) {
    throw new Error(`Not a UserProperty property`);
  }
  return createMqttPacketUserProperty(
    yield* createByteIteratorDecoderForMqttPacketUserPropertyValue(),
  );
}

