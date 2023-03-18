import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketRequestResponseInformationProperty } from '../../mqtt-packet-request-response-information-property.type';
import {
  getByteLengthOfEncodedMqttPacketRequestResponseInformationPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-request-response-information-property-value';

export function getByteLengthOfEncodedMqttPacketRequestResponseInformationProperty(
  input: IMqttPacketRequestResponseInformationProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketRequestResponseInformationPropertyValue(input.getValue());
}
