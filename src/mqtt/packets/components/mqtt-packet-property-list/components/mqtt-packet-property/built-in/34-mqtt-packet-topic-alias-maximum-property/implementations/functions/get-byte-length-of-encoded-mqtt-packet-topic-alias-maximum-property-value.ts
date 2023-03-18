import {
  getByteLengthOfEncodedMqttPacketU16,
} from '../../../../../../../../functions/shared/number/u16/get-byte-length-of-encoded-mqtt-packet-u16';
import { IMqttPacketTopicAliasMaximumPropertyValue } from '../../mqtt-packet-topic-alias-maximum-property.type';

export function getByteLengthOfEncodedMqttPacketTopicAliasMaximumPropertyValue(
  input: IMqttPacketTopicAliasMaximumPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketU16();
}
