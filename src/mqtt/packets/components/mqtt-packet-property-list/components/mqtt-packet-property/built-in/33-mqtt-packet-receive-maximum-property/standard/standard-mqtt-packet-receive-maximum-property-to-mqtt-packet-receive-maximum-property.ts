import { MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_NAME } from '../constants/mqtt-packet-receive-maximum-property-name.constant';
import { createMqttPacketReceiveMaximumProperty } from '../implementations/create-mqtt-packet-receive-maximum-property';
import { IMqttPacketReceiveMaximumProperty } from '../mqtt-packet-receive-maximum-property.type';
import { IStandardMqttPacketReceiveMaximumProperty } from './standard-mqtt-packet-receive-maximum-property.type';

export function standardMqttPacketReceiveMaximumPropertyToMqttPacketReceiveMaximumProperty(
  input: IStandardMqttPacketReceiveMaximumProperty,
): IMqttPacketReceiveMaximumProperty {
  return createMqttPacketReceiveMaximumProperty(
    input[MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_NAME],
  );
}
