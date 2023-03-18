import {
  getByteLengthOfEncodedMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/get-byte-length-of-encoded-mqtt-packet-string-buffer';
import { IMqttPacketAuthenticationMethodPropertyValue } from '../../mqtt-packet-authentication-method-property.type';

export function getByteLengthOfEncodedMqttPacketAuthenticationMethodPropertyValue(
  input: IMqttPacketAuthenticationMethodPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(input);
}
