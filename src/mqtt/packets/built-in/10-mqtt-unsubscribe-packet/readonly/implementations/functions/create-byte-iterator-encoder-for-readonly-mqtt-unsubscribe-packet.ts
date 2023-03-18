import { IReadonlyStringBuffer } from '../../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IByteIteratorEncoder } from '../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import {
  createByteIteratorEncoderForReadonlyMqttPacketId,
} from '../../../../../components/mqtt-packet-id/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-packet-id';
import {
  getByteLengthOfEncodedReadonlyMqttPacketId,
} from '../../../../../components/mqtt-packet-id/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-id';
import { IReadonlyMqttPacketId } from '../../../../../components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  createByteIteratorEncoderForReadonlyMqttPacketPropertyList,
} from '../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-packet-property-list';
import {
  getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength,
} from '../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-property-list-with-length';
import {
  createByteIteratorEncoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-encoder-for-mqtt-packet-variable-byte-integer';
import {
  createByteIteratorEncoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../functions/shared/string-buffer/create-byte-iterator-encoder-for-mqtt-packet-string-buffer';
import {
  getByteLengthOfEncodedMqttPacketReadonlyStringBuffer,
} from '../../../../../functions/shared/string-buffer/get-byte-length-of-encoded-mqtt-packet-string-buffer';
import { IReadonlyMqttUnsubscribePacket } from '../../readonly-mqtt-unsubscribe-packet.type';
import {
  IReadonlyMqttUnsubscribePacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-unsubscribe-packet.get-properties.function-definition';

export function* createByteIteratorEncoderForReadonlyMqttUnsubscribePacket(
  {
    getPacketId,
    getProperties,
    getUnsubscriptions,
  }: IReadonlyMqttUnsubscribePacket,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorEncoder {
  const packetId: IReadonlyMqttPacketId = getPacketId();
  const properties: IReadonlyMqttUnsubscribePacketPropertyList = getProperties();
  const unsubscriptions: readonly IReadonlyStringBuffer[] = getUnsubscriptions();

  /* COMPUTE PACKET'S LENGTH */

  let packetLength: number = 0;

  packetLength += getByteLengthOfEncodedReadonlyMqttPacketId(packetId); // packet id

  // V5: properties
  if (protocolVersion === 5) {
    packetLength += getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  for (let i = 0, l = unsubscriptions.length; i < l; i++) {
    packetLength += getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(unsubscriptions[i]);
  }

  /* WRITE PACKET'S CONTENT */

  yield 0b10100010; // fixed header
  yield* createByteIteratorEncoderForMqttPacketVariableByteInteger(packetLength); // length
  yield* createByteIteratorEncoderForReadonlyMqttPacketId(packetId); // packet id

  // V5: properties
  if (protocolVersion === 5) {
    yield* createByteIteratorEncoderForReadonlyMqttPacketPropertyList(properties);
  }

  for (let i = 0, l = unsubscriptions.length; i < l; i++) {
    yield* createByteIteratorEncoderForMqttPacketReadonlyStringBuffer(unsubscriptions[i]);
  }
}

