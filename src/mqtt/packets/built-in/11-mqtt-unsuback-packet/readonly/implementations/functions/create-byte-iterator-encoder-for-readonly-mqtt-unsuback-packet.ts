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
  UNSUBACK_REASON_CODE,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/11-unsuback/unsuback-reason-code.enum';

import { getByteLengthOfEncodedMqttPacketU8 } from '../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import {
  createByteIteratorEncoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-encoder-for-mqtt-packet-variable-byte-integer';
import { IReadonlyMqttUnsubackPacket } from '../../readonly-mqtt-unsuback-packet.type';
import {
  IReadonlyMqttUnsubackPacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-unsuback-packet.get-properties.function-definition';

export function* createByteIteratorEncoderForReadonlyMqttUnsubackPacket(
  {
    getPacketId,
    getReason,
    getProperties,
  }: IReadonlyMqttUnsubackPacket,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorEncoder {
  const packetId: IReadonlyMqttPacketId = getPacketId();
  const properties: IReadonlyMqttUnsubackPacketPropertyList = getProperties();
  const reasonCode: UNSUBACK_REASON_CODE = getReason().getCode();

  /* COMPUTE PACKET'S LENGTH */

  let packetLength: number = 0;

  packetLength += getByteLengthOfEncodedReadonlyMqttPacketId(packetId); // packet id

  // V5: properties
  if (protocolVersion === 5) {
    packetLength += getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  packetLength += getByteLengthOfEncodedMqttPacketU8(); // reason code

  /* WRITE PACKET'S CONTENT */

  yield 0b10110000; // fixed header
  yield* createByteIteratorEncoderForMqttPacketVariableByteInteger(packetLength); // length
  yield* createByteIteratorEncoderForReadonlyMqttPacketId(packetId); // packet id

  // V5: properties
  if (protocolVersion === 5) {
    yield* createByteIteratorEncoderForReadonlyMqttPacketPropertyList(properties);
  }

  yield reasonCode; //  reason code
}

