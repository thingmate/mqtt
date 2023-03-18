import { MQTT_PACKET_MAXIMUM_QOS_PROPERTY_NAME } from '../constants/mqtt-packet-maximum-qos-property-name.constant';
import { createMqttPacketMaximumQoSProperty } from '../implementations/create-mqtt-packet-maximum-qos-property';
import { IMqttPacketMaximumQoSProperty } from '../mqtt-packet-maximum-qos-property.type';
import { IStandardMqttPacketMaximumQoSProperty } from './standard-mqtt-packet-maximum-qos-property.type';

export function standardMqttPacketMaximumQoSPropertyToMqttPacketMaximumQoSProperty(
  input: IStandardMqttPacketMaximumQoSProperty,
): IMqttPacketMaximumQoSProperty {
  return createMqttPacketMaximumQoSProperty(
    input[MQTT_PACKET_MAXIMUM_QOS_PROPERTY_NAME],
  );
}
