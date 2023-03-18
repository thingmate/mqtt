import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketRequestProblemInformationProperty } from '../../mqtt-packet-request-problem-information-property.type';
import {
  getByteLengthOfEncodedMqttPacketRequestProblemInformationPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-request-problem-information-property-value';

export function getByteLengthOfEncodedMqttPacketRequestProblemInformationProperty(
  input: IMqttPacketRequestProblemInformationProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketRequestProblemInformationPropertyValue(input.getValue());
}
