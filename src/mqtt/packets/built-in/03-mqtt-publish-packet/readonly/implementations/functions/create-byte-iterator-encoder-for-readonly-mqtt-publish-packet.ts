import { IByteIteratorEncoder } from '../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import { QOS } from '../../../../../../constants/qos.enum';
import {
  createByteIteratorEncoderForReadonlyMqttPacketId,
} from '../../../../../components/mqtt-packet-id/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-packet-id';
import {
  getByteLengthOfEncodedReadonlyMqttPacketId,
} from '../../../../../components/mqtt-packet-id/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-id';
import { IReadonlyMqttPacketId } from '../../../../../components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  createByteIteratorEncoderForReadonlyMqttPacketPayload,
} from '../../../../../components/mqtt-packet-payload/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-packet-payload';
import {
  getByteLengthOfEncodedReadonlyMqttPacketPayload,
} from '../../../../../components/mqtt-packet-payload/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-payload';
import { IReadonlyMqttPacketPayload } from '../../../../../components/mqtt-packet-payload/readonly/readonly-mqtt-packet-payload.type';
import {
  createByteIteratorEncoderForReadonlyMqttPacketPropertyList,
} from '../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-packet-property-list';
import {
  getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength,
} from '../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-property-list-with-length';
import {
  createByteIteratorEncoderForReadonlyMqttPacketTopic,
} from '../../../../../components/mqtt-packet-topic/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-packet-topic';
import {
  getByteLengthOfEncodedReadonlyMqttPacketTopic,
} from '../../../../../components/mqtt-packet-topic/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-topic';
import { IReadonlyMqttPacketTopic } from '../../../../../components/mqtt-packet-topic/readonly/readonly-mqtt-packet-topic.type';
import {
  createByteIteratorEncoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-encoder-for-mqtt-packet-variable-byte-integer';
import { IVariableByteInteger } from '../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import { IReadonlyMqttPublishPacket } from '../../readonly-mqtt-publish-packet.type';
import {
  IReadonlyMqttPublishPacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-publish-packet.get-properties.function-definition';

export function* createByteIteratorEncoderForReadonlyMqttPublishPacket(
  {
    getDuplicate,
    getQoS,
    getRetain,
    getTopic,
    getPacketId,
    getProperties,
    getPayload,
  }: IReadonlyMqttPublishPacket,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorEncoder {
  const duplicate: boolean = getDuplicate();
  const qos: QOS = getQoS();
  const retain: boolean = getRetain();
  const topic: IReadonlyMqttPacketTopic = getTopic();
  const packetId: IReadonlyMqttPacketId | undefined = getPacketId();
  const properties: IReadonlyMqttPublishPacketPropertyList = getProperties();
  const payload: IReadonlyMqttPacketPayload = getPayload();

  /* COMPUTE PACKET'S LENGTH */

  let packetLength: IVariableByteInteger = 0;

  packetLength += getByteLengthOfEncodedReadonlyMqttPacketTopic(topic); // topic

  if (qos > 0) {
    if (packetId === void 0) {
      throw new Error(`If qos > 0, packetId must be specified`);
    } else {
      packetLength += getByteLengthOfEncodedReadonlyMqttPacketId(packetId); // packet id
    }
  }

  // V5: properties
  if (protocolVersion === 5) {
    packetLength += getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  packetLength += getByteLengthOfEncodedReadonlyMqttPacketPayload(payload); // payload

  /* WRITE PACKET'S CONTENT */
  yield (
    0b00110000
    | (duplicate ? 0b00001000 : 0)
    | (qos << 1)
    | (retain ? 0b00000001 : 0)
  ); // fixed header

  yield* createByteIteratorEncoderForMqttPacketVariableByteInteger(packetLength); // length
  yield* createByteIteratorEncoderForReadonlyMqttPacketTopic(topic); // topic

  // packet id
  if (qos > 0) {
    if (packetId !== void 0) {
      yield* createByteIteratorEncoderForReadonlyMqttPacketId(packetId);
    }
  }

  // V5: properties
  if (protocolVersion === 5) {
    yield* createByteIteratorEncoderForReadonlyMqttPacketPropertyList(properties);
  }

  yield* createByteIteratorEncoderForReadonlyMqttPacketPayload(payload);
}

