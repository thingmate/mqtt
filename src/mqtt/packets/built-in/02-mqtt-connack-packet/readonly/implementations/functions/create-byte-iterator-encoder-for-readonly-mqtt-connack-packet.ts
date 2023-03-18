import { IByteIteratorEncoder } from '../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import {
  createByteIteratorEncoderForReadonlyMqttPacketPropertyList,
} from '../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-packet-property-list';
import {
  getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength,
} from '../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-property-list-with-length';
import {
  CONNACK_REASON_CODE,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/02-connack/connack-reason-code.enum';

import { getByteLengthOfEncodedMqttPacketU8 } from '../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import {
  createByteIteratorEncoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-encoder-for-mqtt-packet-variable-byte-integer';
import { IVariableByteInteger } from '../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import { IReadonlyMqttConnackPacket } from '../../readonly-mqtt-connack-packet.type';
import {
  IReadonlyMqttConnackPacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-connack-packet.get-properties.function-definition';

export function* createByteIteratorEncoderForReadonlyMqttConnackPacket(
  {
    getSessionPresent,
    getReason,
    getProperties,
  }: IReadonlyMqttConnackPacket,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorEncoder {
  const sessionPresent: boolean = getSessionPresent();
  const reasonCode: CONNACK_REASON_CODE = getReason().getCode();
  const properties: IReadonlyMqttConnackPacketPropertyList = getProperties();

  /* COMPUTE PACKET'S LENGTH */

  let packetLength: IVariableByteInteger = 0;

  packetLength += getByteLengthOfEncodedMqttPacketU8(); // session present
  packetLength += getByteLengthOfEncodedMqttPacketU8(); // reason code - INFO always present unlike PUBACK

  // V5: properties
  if (protocolVersion === 5) {
    // INFO always present unlike PUBACK
    packetLength += getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  /* WRITE PACKET'S CONTENT */

  yield 0b00100000; // fixed header
  yield* createByteIteratorEncoderForMqttPacketVariableByteInteger(packetLength); // length
  yield (sessionPresent ? 0b00000001 : 0); // session present
  yield reasonCode; // reason code

  // V5: properties
  if (protocolVersion === 5) {
    yield* createByteIteratorEncoderForReadonlyMqttPacketPropertyList(properties);
  }
}

