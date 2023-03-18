import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketResponseTopicProperty } from '../../mqtt-packet-response-topic-property.type';
import {
  getByteLengthOfEncodedMqttPacketResponseTopicPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-response-topic-property-value';

export function getByteLengthOfEncodedMqttPacketResponseTopicProperty(
  input: IMqttPacketResponseTopicProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketResponseTopicPropertyValue(input.getValue());
}
