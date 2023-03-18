import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketCorrelationDataProperty } from '../../mqtt-packet-correlation-data-property.type';
import {
  getByteLengthOfEncodedMqttPacketCorrelationDataPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-correlation-data-property-value';

export function getByteLengthOfEncodedMqttPacketCorrelationDataProperty(
  input: IMqttPacketCorrelationDataProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketCorrelationDataPropertyValue(input.getValue());
}
