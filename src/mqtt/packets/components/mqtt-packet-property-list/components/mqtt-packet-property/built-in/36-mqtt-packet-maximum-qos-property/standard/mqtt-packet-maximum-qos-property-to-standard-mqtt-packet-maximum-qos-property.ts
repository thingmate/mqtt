import { MQTT_PACKET_MAXIMUM_QOS_PROPERTY_NAME } from '../constants/mqtt-packet-maximum-qos-property-name.constant';
import { IMqttPacketMaximumQoSProperty } from '../mqtt-packet-maximum-qos-property.type';
import { IStandardMqttPacketMaximumQoSProperty } from './standard-mqtt-packet-maximum-qos-property.type';

export function mqttPacketMaximumQoSPropertyToStandardMqttPacketMaximumQoSProperty(
  {
    getValue,
  }: IMqttPacketMaximumQoSProperty,
): IStandardMqttPacketMaximumQoSProperty {
  return {
    [MQTT_PACKET_MAXIMUM_QOS_PROPERTY_NAME]: getValue(),
  };
}
