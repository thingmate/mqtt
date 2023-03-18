import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketAuthenticationMethodProperty } from '../../mqtt-packet-authentication-method-property.type';
import {
  getByteLengthOfEncodedMqttPacketAuthenticationMethodPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-authentication-method-property-value';

export function getByteLengthOfEncodedMqttPacketAuthenticationMethodProperty(
  input: IMqttPacketAuthenticationMethodProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketAuthenticationMethodPropertyValue(input.getValue());
}
