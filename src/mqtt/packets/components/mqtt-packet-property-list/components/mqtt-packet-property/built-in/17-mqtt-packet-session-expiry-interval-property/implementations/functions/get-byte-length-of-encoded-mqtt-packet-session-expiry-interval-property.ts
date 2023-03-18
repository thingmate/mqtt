import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketSessionExpiryIntervalProperty } from '../../mqtt-packet-session-expiry-interval-property.type';
import {
  getByteLengthOfEncodedMqttPacketSessionExpiryIntervalPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-session-expiry-interval-property-value';

export function getByteLengthOfEncodedMqttPacketSessionExpiryIntervalProperty(
  input: IMqttPacketSessionExpiryIntervalProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketSessionExpiryIntervalPropertyValue(input.getValue());
}
