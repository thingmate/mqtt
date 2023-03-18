import {
  getByteLengthOfEncodedMqttPacketU32,
} from '../../../../../../../../functions/shared/number/u32/get-byte-length-of-encoded-mqtt-packet-u32';
import { IMqttPacketWillDelayIntervalPropertyValue } from '../../mqtt-packet-will-delay-interval-property.type';

export function getByteLengthOfEncodedMqttPacketWillDelayIntervalPropertyValue(
  input: IMqttPacketWillDelayIntervalPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketU32();
}
