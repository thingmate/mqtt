import {
  getByteLengthOfEncodedMqttPacketU16,
} from '../../../../../../../../functions/shared/number/u16/get-byte-length-of-encoded-mqtt-packet-u16';
import { IMqttPacketTopicAliasPropertyValue } from '../../mqtt-packet-topic-alias-property.type';

export function getByteLengthOfEncodedMqttPacketTopicAliasPropertyValue(
  input: IMqttPacketTopicAliasPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketU16();
}
