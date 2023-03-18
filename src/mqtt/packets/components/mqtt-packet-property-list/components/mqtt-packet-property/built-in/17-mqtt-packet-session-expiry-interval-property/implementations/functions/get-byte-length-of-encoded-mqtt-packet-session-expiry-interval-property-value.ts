import {
  getByteLengthOfEncodedMqttPacketU32,
} from '../../../../../../../../functions/shared/number/u32/get-byte-length-of-encoded-mqtt-packet-u32';
import { IMqttPacketSessionExpiryIntervalPropertyValue } from '../../mqtt-packet-session-expiry-interval-property.type';

export function getByteLengthOfEncodedMqttPacketSessionExpiryIntervalPropertyValue(
  input: IMqttPacketSessionExpiryIntervalPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketU32();
}
