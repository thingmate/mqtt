import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketWillDelayIntervalProperty } from '../../mqtt-packet-will-delay-interval-property.type';
import {
  getByteLengthOfEncodedMqttPacketWillDelayIntervalPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-will-delay-interval-property-value';

export function getByteLengthOfEncodedMqttPacketWillDelayIntervalProperty(
  input: IMqttPacketWillDelayIntervalProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketWillDelayIntervalPropertyValue(input.getValue());
}
