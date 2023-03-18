import {
  getByteLengthOfEncodedMqttPacketUint8ArrayWithLength,
} from '../../../../../../../../functions/shared/uint8-array/with-length/get-byte-length-of-encoded-mqtt-packet-uint8-array-with-length';
import { IMqttPacketAuthenticationDataPropertyValue } from '../../mqtt-packet-authentication-data-property.type';

export function getByteLengthOfEncodedMqttPacketAuthenticationDataPropertyValue(
  input: IMqttPacketAuthenticationDataPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketUint8ArrayWithLength(input);
}
