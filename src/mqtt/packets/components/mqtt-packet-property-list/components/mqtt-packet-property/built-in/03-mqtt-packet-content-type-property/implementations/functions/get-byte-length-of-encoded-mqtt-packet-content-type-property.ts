import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketContentTypeProperty } from '../../mqtt-packet-content-type-property.type';
import {
  getByteLengthOfEncodedMqttPacketContentTypePropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-content-type-property-value';

export function getByteLengthOfEncodedMqttPacketContentTypeProperty(
  input: IMqttPacketContentTypeProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketContentTypePropertyValue(input.getValue());
}
