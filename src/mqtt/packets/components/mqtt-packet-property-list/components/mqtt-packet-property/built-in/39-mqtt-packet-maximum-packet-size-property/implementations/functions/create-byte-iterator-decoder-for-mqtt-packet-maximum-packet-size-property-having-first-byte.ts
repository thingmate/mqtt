import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_CODE } from '../../constants/mqtt-packet-maximum-packet-size-property-code.constant';
import { IMqttPacketMaximumPacketSizeProperty } from '../../mqtt-packet-maximum-packet-size-property.type';
import { createMqttPacketMaximumPacketSizeProperty } from '../create-mqtt-packet-maximum-packet-size-property';
import {
  createByteIteratorDecoderForMqttPacketMaximumPacketSizePropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-maximum-packet-size-property-value';

export function* createByteIteratorDecoderForMqttPacketMaximumPacketSizePropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketMaximumPacketSizeProperty> {
  if (firstByte !== MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_CODE) {
    throw new Error(`Not a MaximumPacketSize property`);
  }
  return createMqttPacketMaximumPacketSizeProperty(
    yield* createByteIteratorDecoderForMqttPacketMaximumPacketSizePropertyValue(),
  );
}

