import { MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_NAME } from '../constants/mqtt-packet-server-keep-alive-property-name.constant';
import { createMqttPacketServerKeepAliveProperty } from '../implementations/create-mqtt-packet-server-keep-alive-property';
import { IMqttPacketServerKeepAliveProperty } from '../mqtt-packet-server-keep-alive-property.type';
import { IStandardMqttPacketServerKeepAliveProperty } from './standard-mqtt-packet-server-keep-alive-property.type';

export function standardMqttPacketServerKeepAlivePropertyToMqttPacketServerKeepAliveProperty(
  input: IStandardMqttPacketServerKeepAliveProperty,
): IMqttPacketServerKeepAliveProperty {
  return createMqttPacketServerKeepAliveProperty(
    input[MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_NAME],
  );
}
