import { MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_NAME } from '../constants/mqtt-packet-maximum-packet-size-property-name.constant';
import { createMqttPacketMaximumPacketSizeProperty } from '../implementations/create-mqtt-packet-maximum-packet-size-property';
import { IMqttPacketMaximumPacketSizeProperty } from '../mqtt-packet-maximum-packet-size-property.type';
import { IStandardMqttPacketMaximumPacketSizeProperty } from './standard-mqtt-packet-maximum-packet-size-property.type';

export function standardMqttPacketMaximumPacketSizePropertyToMqttPacketMaximumPacketSizeProperty(
  input: IStandardMqttPacketMaximumPacketSizeProperty,
): IMqttPacketMaximumPacketSizeProperty {
  return createMqttPacketMaximumPacketSizeProperty(
    input[MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_NAME],
  );
}
