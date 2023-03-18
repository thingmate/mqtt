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
  PUBACK_REASON_CODE,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/04-puback/puback-reason-code.enum';
import { getByteLengthOfEncodedMqttPacketU8 } from '../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import {
  createByteIteratorEncoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-encoder-for-mqtt-packet-variable-byte-integer';
import { IVariableByteInteger } from '../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import { IReadonlyMqttPubackPacket } from '../../readonly-mqtt-puback-packet.type';
import {
  IReadonlyMqttPubackPacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-puback-packet.get-properties.function-definition';

export function* createByteIteratorEncoderForReadonlyMqttPubackPacket(
  {
    getPacketId,
    getReason,
    getProperties,
  }: IReadonlyMqttPubackPacket,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorEncoder {
  const packetId: IReadonlyMqttPacketId = getPacketId();
  const reasonCode: PUBACK_REASON_CODE = getReason().getCode();
  const properties: IReadonlyMqttPubackPacketPropertyList = getProperties();

  const canDiscardProperties: boolean = (properties.getSize() === 0);
  const canReasonCode: boolean = canDiscardProperties
    && (reasonCode === PUBACK_REASON_CODE.SUCCESS);

  /* COMPUTE PACKET'S LENGTH */

  let packetLength: IVariableByteInteger = 0;

  packetLength += getByteLengthOfEncodedReadonlyMqttPacketId(packetId); // packet id

  // reason code
  if (!canReasonCode) {
    packetLength += getByteLengthOfEncodedMqttPacketU8();
  }

  // V5: properties
  if (
    (protocolVersion === 5)
    && !canDiscardProperties
  ) {
    packetLength += getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  /* WRITE PACKET'S CONTENT */

  yield 0b01000000; // fixed header
  yield* createByteIteratorEncoderForMqttPacketVariableByteInteger(packetLength); // length
  yield* createByteIteratorEncoderForReadonlyMqttPacketId(packetId); // packet id

  // reason code
  if (!canReasonCode) {
    yield reasonCode;
  }

  // V5: properties
  if (
    (protocolVersion === 5)
    && !canDiscardProperties
  ) {
    yield* createByteIteratorEncoderForReadonlyMqttPacketPropertyList(properties);
  }
}

