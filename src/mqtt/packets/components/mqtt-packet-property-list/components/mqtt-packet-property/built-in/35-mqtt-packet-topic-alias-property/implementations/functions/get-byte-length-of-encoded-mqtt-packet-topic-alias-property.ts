import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketTopicAliasProperty } from '../../mqtt-packet-topic-alias-property.type';
import {
  getByteLengthOfEncodedMqttPacketTopicAliasPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-topic-alias-property-value';

export function getByteLengthOfEncodedMqttPacketTopicAliasProperty(
  input: IMqttPacketTopicAliasProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketTopicAliasPropertyValue(input.getValue());
}
