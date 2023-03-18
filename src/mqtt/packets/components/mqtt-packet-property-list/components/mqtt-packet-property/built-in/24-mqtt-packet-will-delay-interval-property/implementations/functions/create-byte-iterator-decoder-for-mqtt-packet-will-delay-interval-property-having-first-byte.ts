import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_CODE } from '../../constants/mqtt-packet-will-delay-interval-property-code.constant';
import { IMqttPacketWillDelayIntervalProperty } from '../../mqtt-packet-will-delay-interval-property.type';
import { createMqttPacketWillDelayIntervalProperty } from '../create-mqtt-packet-will-delay-interval-property';
import {
  createByteIteratorDecoderForMqttPacketWillDelayIntervalPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-will-delay-interval-property-value';

export function* createByteIteratorDecoderForMqttPacketWillDelayIntervalPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketWillDelayIntervalProperty> {
  if (firstByte !== MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_CODE) {
    throw new Error(`Not a WillDelayInterval property`);
  }
  return createMqttPacketWillDelayIntervalProperty(
    yield* createByteIteratorDecoderForMqttPacketWillDelayIntervalPropertyValue(),
  );
}

