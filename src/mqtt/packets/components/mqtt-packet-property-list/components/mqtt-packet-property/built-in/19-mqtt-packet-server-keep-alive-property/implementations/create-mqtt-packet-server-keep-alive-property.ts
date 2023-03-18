import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_CODE } from '../constants/mqtt-packet-server-keep-alive-property-code.constant';
import { MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_NAME } from '../constants/mqtt-packet-server-keep-alive-property-name.constant';
import {
  IMqttPacketServerKeepAliveProperty,
  IMqttPacketServerKeepAlivePropertyCode,
  IMqttPacketServerKeepAlivePropertyName,
  IMqttPacketServerKeepAlivePropertyValue,
} from '../mqtt-packet-server-keep-alive-property.type';

export function createMqttPacketServerKeepAliveProperty(
  value: IMqttPacketServerKeepAlivePropertyValue,
): IMqttPacketServerKeepAliveProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketServerKeepAlivePropertyCode, IMqttPacketServerKeepAlivePropertyName, IMqttPacketServerKeepAlivePropertyValue>({
    code: MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_CODE,
    name: MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_NAME,
    value,
  });
}

