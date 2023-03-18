import {
  getByteLengthOfEncodedMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/get-byte-length-of-encoded-mqtt-packet-boolean';
import { IMqttPacketRequestResponseInformationPropertyValue } from '../../mqtt-packet-request-response-information-property.type';

export function getByteLengthOfEncodedMqttPacketRequestResponseInformationPropertyValue(
  input: IMqttPacketRequestResponseInformationPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketBoolean();
}
