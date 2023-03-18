import {
  getByteLengthOfEncodedMqttPacketU32,
} from '../../../../../../../../functions/shared/number/u32/get-byte-length-of-encoded-mqtt-packet-u32';
import { IMqttPacketMessageExpiryIntervalPropertyValue } from '../../mqtt-packet-message-expiry-interval-property.type';

export function getByteLengthOfEncodedMqttPacketMessageExpiryIntervalPropertyValue(
  input: IMqttPacketMessageExpiryIntervalPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketU32();
}
