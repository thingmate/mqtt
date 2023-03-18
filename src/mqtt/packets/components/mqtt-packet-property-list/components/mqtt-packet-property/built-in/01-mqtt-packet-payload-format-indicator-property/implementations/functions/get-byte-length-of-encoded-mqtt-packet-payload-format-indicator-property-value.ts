import {
  getByteLengthOfEncodedMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/get-byte-length-of-encoded-mqtt-packet-boolean';
import { IMqttPacketPayloadFormatIndicatorPropertyValue } from '../../mqtt-packet-payload-format-indicator-property.type';

export function getByteLengthOfEncodedMqttPacketPayloadFormatIndicatorPropertyValue(
  input: IMqttPacketPayloadFormatIndicatorPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketBoolean();
}
