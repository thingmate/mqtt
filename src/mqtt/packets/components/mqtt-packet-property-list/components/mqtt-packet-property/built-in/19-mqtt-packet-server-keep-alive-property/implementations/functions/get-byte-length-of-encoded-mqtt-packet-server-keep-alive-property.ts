import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketServerKeepAliveProperty } from '../../mqtt-packet-server-keep-alive-property.type';
import {
  getByteLengthOfEncodedMqttPacketServerKeepAlivePropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-server-keep-alive-property-value';

export function getByteLengthOfEncodedMqttPacketServerKeepAliveProperty(
  input: IMqttPacketServerKeepAliveProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketServerKeepAlivePropertyValue(input.getValue());
}
