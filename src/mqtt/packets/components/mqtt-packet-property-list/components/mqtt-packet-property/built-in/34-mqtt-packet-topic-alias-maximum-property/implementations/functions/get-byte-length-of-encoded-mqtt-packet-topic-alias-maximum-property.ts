import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketTopicAliasMaximumProperty } from '../../mqtt-packet-topic-alias-maximum-property.type';
import {
  getByteLengthOfEncodedMqttPacketTopicAliasMaximumPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-topic-alias-maximum-property-value';

export function getByteLengthOfEncodedMqttPacketTopicAliasMaximumProperty(
  input: IMqttPacketTopicAliasMaximumProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketTopicAliasMaximumPropertyValue(input.getValue());
}
