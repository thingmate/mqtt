import { MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_NAME } from '../constants/mqtt-packet-server-keep-alive-property-name.constant';
import { IMqttPacketServerKeepAliveProperty } from '../mqtt-packet-server-keep-alive-property.type';
import { IStandardMqttPacketServerKeepAliveProperty } from './standard-mqtt-packet-server-keep-alive-property.type';

export function mqttPacketServerKeepAlivePropertyToStandardMqttPacketServerKeepAliveProperty(
  {
    getValue,
  }: IMqttPacketServerKeepAliveProperty,
): IStandardMqttPacketServerKeepAliveProperty {
  return {
    [MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_NAME]: getValue(),
  };
}
