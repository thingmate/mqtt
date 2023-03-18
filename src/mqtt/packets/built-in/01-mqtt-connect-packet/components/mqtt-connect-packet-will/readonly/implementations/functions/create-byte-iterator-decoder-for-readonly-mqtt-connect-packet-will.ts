import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../../../../constants/mqtt-protocol-version.type';
import { QOS } from '../../../../../../../../constants/qos.enum';
import {
  createByteIteratorDecoderForReadonlyMqttPacketPayloadWithLength,
} from '../../../../../../../components/mqtt-packet-payload/readonly/implementations/functions/with-length/create-byte-iterator-decoder-for-readonly-mqtt-packet-payload-with-length';
import { IReadonlyMqttPacketPayload } from '../../../../../../../components/mqtt-packet-payload/readonly/readonly-mqtt-packet-payload.type';
import {
  EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT,
} from '../../../../../../../components/mqtt-packet-property-list/readonly/constants/empty-readonly-mqtt-packet-property-list.constant';
import {
  createByteIteratorDecoderForReadonlyMqttPacketPropertyList,
} from '../../../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-packet-property-list';
import {
  createByteIteratorDecoderForReadonlyMqttPacketTopic,
} from '../../../../../../../components/mqtt-packet-topic/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-packet-topic';
import { IReadonlyMqttPacketTopic } from '../../../../../../../components/mqtt-packet-topic/readonly/readonly-mqtt-packet-topic.type';
import { IReadonlyMqttConnectPacketWill } from '../../readonly-mqtt-connect-packet-will.type';
import {
  IReadonlyMqttConnectPacketWillPropertyList,
} from '../../traits/get-properties/readonly-mqtt-connect-packet-will.get-properties.function-definition';
import { createReadonlyMqttConnectPacketWill } from '../create-readonly-mqtt-connect-packet-will';

export function* createByteIteratorDecoderForReadonlyMqttConnectPacketWill(
  flagsByte: u8,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttConnectPacketWill> {
  const retain: boolean = Boolean(flagsByte & 0b00100000); // retain
  const qos: QOS = (flagsByte & 0b00011000) >> 3; // qos

  // V5: properties
  let properties: IReadonlyMqttConnectPacketWillPropertyList = EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT;
  if (protocolVersion === 5) {
    properties = yield* createByteIteratorDecoderForReadonlyMqttPacketPropertyList();
  }

  // topic
  const topic: IReadonlyMqttPacketTopic = yield* createByteIteratorDecoderForReadonlyMqttPacketTopic();

  // payload
  const payload: IReadonlyMqttPacketPayload = yield* createByteIteratorDecoderForReadonlyMqttPacketPayloadWithLength();

  return createReadonlyMqttConnectPacketWill({
    retain,
    qos,
    properties,
    topic,
    payload,
  });
}

