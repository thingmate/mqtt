import { MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_NAME } from '../constants/mqtt-packet-receive-maximum-property-name.constant';
import { IMqttPacketReceiveMaximumProperty } from '../mqtt-packet-receive-maximum-property.type';
import { IStandardMqttPacketReceiveMaximumProperty } from './standard-mqtt-packet-receive-maximum-property.type';

export function mqttPacketReceiveMaximumPropertyToStandardMqttPacketReceiveMaximumProperty(
  {
    getValue,
  }: IMqttPacketReceiveMaximumProperty,
): IStandardMqttPacketReceiveMaximumProperty {
  return {
    [MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_NAME]: getValue(),
  };
}
