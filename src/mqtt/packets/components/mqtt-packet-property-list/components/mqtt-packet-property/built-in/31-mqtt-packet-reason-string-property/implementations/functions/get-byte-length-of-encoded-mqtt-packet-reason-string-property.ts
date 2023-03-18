import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketReasonStringProperty } from '../../mqtt-packet-reason-string-property.type';
import {
  getByteLengthOfEncodedMqttPacketReasonStringPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-reason-string-property-value';

export function getByteLengthOfEncodedMqttPacketReasonStringProperty(
  input: IMqttPacketReasonStringProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketReasonStringPropertyValue(input.getValue());
}
