import {
  getByteLengthOfEncodedMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/get-byte-length-of-encoded-mqtt-packet-string-buffer';
import { IMqttPacketContentTypePropertyValue } from '../../mqtt-packet-content-type-property.type';

export function getByteLengthOfEncodedMqttPacketContentTypePropertyValue(
  input: IMqttPacketContentTypePropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(input);
}
