import {
  getByteLengthOfEncodedMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/get-byte-length-of-encoded-mqtt-packet-string-buffer';
import { IMqttPacketResponseInformationPropertyValue } from '../../mqtt-packet-response-information-property.type';

export function getByteLengthOfEncodedMqttPacketResponseInformationPropertyValue(
  input: IMqttPacketResponseInformationPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(input);
}
