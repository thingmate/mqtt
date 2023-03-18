import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import { QOS } from '../../../../../../constants/qos.enum';
import {
  createByteIteratorDecoderForReadonlyMqttPacketId,
} from '../../../../../components/mqtt-packet-id/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-packet-id';
import {
  getByteLengthOfEncodedReadonlyMqttPacketId,
} from '../../../../../components/mqtt-packet-id/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-id';
import { IReadonlyMqttPacketId } from '../../../../../components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  createByteIteratorDecoderForReadonlyMqttPacketPayload,
} from '../../../../../components/mqtt-packet-payload/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-packet-payload';
import {
  getByteLengthOfEncodedReadonlyMqttPacketPayload,
} from '../../../../../components/mqtt-packet-payload/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-payload';
import { IReadonlyMqttPacketPayload } from '../../../../../components/mqtt-packet-payload/readonly/readonly-mqtt-packet-payload.type';
import {
  EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT,
} from '../../../../../components/mqtt-packet-property-list/readonly/constants/empty-readonly-mqtt-packet-property-list.constant';
import {
  createByteIteratorDecoderForReadonlyMqttPacketPropertyList,
} from '../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-packet-property-list';
import {
  getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength,
} from '../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-property-list-with-length';
import {
  createByteIteratorDecoderForReadonlyMqttPacketTopic,
} from '../../../../../components/mqtt-packet-topic/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-packet-topic';
import { IReadonlyMqttPacketTopic } from '../../../../../components/mqtt-packet-topic/readonly/readonly-mqtt-packet-topic.type';
import {
  createByteIteratorDecoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-decoder-for-mqtt-packet-variable-byte-integer';
import { IVariableByteInteger } from '../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import {
  getByteLengthOfEncodedMqttPacketReadonlyStringBuffer,
} from '../../../../../functions/shared/string-buffer/get-byte-length-of-encoded-mqtt-packet-string-buffer';
import { verifyRemainingPacketLength } from '../../../../../functions/shared/verify-remaining-packet-length';
import { IReadonlyMqttPublishPacket } from '../../readonly-mqtt-publish-packet.type';
import {
  IReadonlyMqttPublishPacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-publish-packet.get-properties.function-definition';
import { createReadonlyMqttPublishPacket } from '../create-readonly-mqtt-publish-packet';

export function* createByteIteratorDecoderForReadonlyMqttPublishPacketHavingFirstByte(
  firstByte: u8,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttPublishPacket> {
  if ((firstByte & 0b11110000) !== 0b00110000) {
    throw new Error(`Not a PUBLISH packet`);
  }

  let remainingPacketLength: IVariableByteInteger = yield* createByteIteratorDecoderForMqttPacketVariableByteInteger();

  // flags
  const duplicate: boolean = Boolean(firstByte & 0b00001000);
  const qos: QOS = (firstByte & 0b00000110) >> 1;
  const retain: boolean = Boolean(firstByte & 0b00000001);

  // topic
  const topic: IReadonlyMqttPacketTopic = yield* createByteIteratorDecoderForReadonlyMqttPacketTopic();
  remainingPacketLength -= getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(topic);

  // packet id
  let packetId: IReadonlyMqttPacketId | undefined;
  if (qos > 0) {
    packetId = yield* createByteIteratorDecoderForReadonlyMqttPacketId();
    remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttPacketId(packetId);
  }

  // V5: properties
  let properties: IReadonlyMqttPublishPacketPropertyList = EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT;
  if (protocolVersion === 5) {
    properties = yield* createByteIteratorDecoderForReadonlyMqttPacketPropertyList();
    remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  const payload: IReadonlyMqttPacketPayload = yield* createByteIteratorDecoderForReadonlyMqttPacketPayload(remainingPacketLength);
  remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttPacketPayload(payload);

  verifyRemainingPacketLength(remainingPacketLength);

  return createReadonlyMqttPublishPacket({
    duplicate,
    qos,
    retain,
    topic,
    packetId,
    properties,
    payload,
  });
}

