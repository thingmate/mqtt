import {
  getByteLengthOfEncodedMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/get-byte-length-of-encoded-mqtt-packet-variable-byte-integer';
import { IGenericReadonlyMqttPacketPropertyList } from '../../readonly-mqtt-packet-property-list.type';
import { getByteLengthOfEncodedReadonlyMqttPacketPropertyList } from './get-byte-length-of-encoded-readonly-mqtt-packet-property-list';

export function getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(
  input: IGenericReadonlyMqttPacketPropertyList,
): number {
  const length: number = getByteLengthOfEncodedReadonlyMqttPacketPropertyList(input);
  return getByteLengthOfEncodedMqttPacketVariableByteInteger(length) + length;
}
