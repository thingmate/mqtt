import { IByteIteratorEncoder } from '../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import {
  createByteIteratorEncoderForReadonlyMqttPacketPropertyList,
} from '../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-packet-property-list';
import {
  getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength,
} from '../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-property-list-with-length';
import {
  DISCONNECT_REASON_CODE,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/14-disconnect/disconnect-reason-code.enum';

import { getByteLengthOfEncodedMqttPacketU8 } from '../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import {
  createByteIteratorEncoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-encoder-for-mqtt-packet-variable-byte-integer';
import { IVariableByteInteger } from '../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import { IReadonlyMqttDisconnectPacket } from '../../readonly-mqtt-disconnect-packet.type';
import {
  IReadonlyMqttDisconnectPacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-disconnect-packet.get-properties.function-definition';

export function* createByteIteratorEncoderForReadonlyMqttDisconnectPacket(
  {
    getReason,
    getProperties,
  }: IReadonlyMqttDisconnectPacket,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorEncoder {
  const reasonCode: DISCONNECT_REASON_CODE = getReason().getCode();
  const properties: IReadonlyMqttDisconnectPacketPropertyList = getProperties();

  /* COMPUTE PACKET'S LENGTH */

  let packetLength: IVariableByteInteger = 0;

  // TODO may be optimized if reason code is success => length is 0
  packetLength += getByteLengthOfEncodedMqttPacketU8(); // reason code

  // V5: properties
  if (protocolVersion === 5) {
    // TODO may be optimized if properties.length === 0 => length is 0
    packetLength += getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  /* WRITE PACKET'S CONTENT */

  yield 0b11100000; // fixed header
  yield* createByteIteratorEncoderForMqttPacketVariableByteInteger(packetLength); // length
  yield reasonCode; //  reason code

  // V5: properties
  if (protocolVersion === 5) {
    yield* createByteIteratorEncoderForReadonlyMqttPacketPropertyList(properties);
  }
}

