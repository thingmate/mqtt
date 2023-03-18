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
  PUBCOMP_REASON_CODE,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/07-pubcomp/pubcomp-reason-code.enum';
import { getByteLengthOfEncodedMqttPacketU8 } from '../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import {
  createByteIteratorEncoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-encoder-for-mqtt-packet-variable-byte-integer';
import { IVariableByteInteger } from '../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import { IReadonlyMqttPubcompPacket } from '../../readonly-mqtt-pubcomp-packet.type';
import {
  IReadonlyMqttPubcompPacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-pubcomp-packet.get-properties.function-definition';

export function* createByteIteratorEncoderForReadonlyMqttPubcompPacket(
  {
    getPacketId,
    getReason,
    getProperties,
  }: IReadonlyMqttPubcompPacket,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorEncoder {
  const packetId: IReadonlyMqttPacketId = getPacketId();
  const reasonCode: PUBCOMP_REASON_CODE = getReason().getCode();
  const properties: IReadonlyMqttPubcompPacketPropertyList = getProperties();

  /* COMPUTE PACKET'S LENGTH */

  let packetLength: IVariableByteInteger = 0;

  packetLength += getByteLengthOfEncodedReadonlyMqttPacketId(packetId); // packet id
  // TODO may be optimized if reason code is success => length is 0
  packetLength += getByteLengthOfEncodedMqttPacketU8(); // reason code

  // V5: properties
  if (protocolVersion === 5) {
    // TODO may be optimized if properties.length === 0 => length is 0
    packetLength += getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  /* WRITE PACKET'S CONTENT */

  yield 0b01010000; // fixed header
  yield* createByteIteratorEncoderForMqttPacketVariableByteInteger(packetLength); // length
  yield* createByteIteratorEncoderForReadonlyMqttPacketId(packetId); // packet id
  yield reasonCode; // reason code

  // V5: properties
  if (protocolVersion === 5) {
    yield* createByteIteratorEncoderForReadonlyMqttPacketPropertyList(properties);
  }
}

