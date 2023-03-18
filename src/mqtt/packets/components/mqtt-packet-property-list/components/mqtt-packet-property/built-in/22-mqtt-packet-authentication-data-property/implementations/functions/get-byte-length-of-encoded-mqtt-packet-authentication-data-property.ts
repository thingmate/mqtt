import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketAuthenticationDataProperty } from '../../mqtt-packet-authentication-data-property.type';
import {
  getByteLengthOfEncodedMqttPacketAuthenticationDataPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-authentication-data-property-value';

export function getByteLengthOfEncodedMqttPacketAuthenticationDataProperty(
  input: IMqttPacketAuthenticationDataProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketAuthenticationDataPropertyValue(input.getValue());
}
