import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketResponseInformationProperty } from '../../mqtt-packet-response-information-property.type';
import {
  getByteLengthOfEncodedMqttPacketResponseInformationPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-response-information-property-value';

export function getByteLengthOfEncodedMqttPacketResponseInformationProperty(
  input: IMqttPacketResponseInformationProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketResponseInformationPropertyValue(input.getValue());
}
