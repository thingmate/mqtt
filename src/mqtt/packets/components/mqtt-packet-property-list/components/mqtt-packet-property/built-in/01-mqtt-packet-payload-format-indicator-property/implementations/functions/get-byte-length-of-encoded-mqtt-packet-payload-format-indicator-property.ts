import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketPayloadFormatIndicatorProperty } from '../../mqtt-packet-payload-format-indicator-property.type';
import {
  getByteLengthOfEncodedMqttPacketPayloadFormatIndicatorPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-payload-format-indicator-property-value';

export function getByteLengthOfEncodedMqttPacketPayloadFormatIndicatorProperty(
  input: IMqttPacketPayloadFormatIndicatorProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketPayloadFormatIndicatorPropertyValue(input.getValue());
}
