import { IMqttPingrespPacketType, MQTT_PINGRESP_PACKET_TYPE } from '../constants/mqtt-pingresp-packet-type.constant';
import { IMqttPingrespPacket } from '../mqtt-pingresp-packet.type';

export function createMqttPingrespPacket(): IMqttPingrespPacket {
  const getType = (): IMqttPingrespPacketType => {
    return MQTT_PINGRESP_PACKET_TYPE;
  };

  return {
    getType,
  };
}

