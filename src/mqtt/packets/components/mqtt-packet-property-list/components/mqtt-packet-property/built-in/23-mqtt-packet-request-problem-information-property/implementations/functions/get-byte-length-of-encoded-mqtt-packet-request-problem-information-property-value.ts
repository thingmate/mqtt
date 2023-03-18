import {
  getByteLengthOfEncodedMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/get-byte-length-of-encoded-mqtt-packet-boolean';
import { IMqttPacketRequestProblemInformationPropertyValue } from '../../mqtt-packet-request-problem-information-property.type';

export function getByteLengthOfEncodedMqttPacketRequestProblemInformationPropertyValue(
  input: IMqttPacketRequestProblemInformationPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketBoolean();
}
