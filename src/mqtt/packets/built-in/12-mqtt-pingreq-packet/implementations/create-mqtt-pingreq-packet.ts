import { IMqttPingreqPacketType, MQTT_PINGREQ_PACKET_TYPE } from '../constants/mqtt-pingreq-packet-type.constant';
import { IMqttPingreqPacket } from '../mqtt-pingreq-packet.type';

export function createMqttPingreqPacket(): IMqttPingreqPacket {
  const getType = (): IMqttPingreqPacketType => {
    return MQTT_PINGREQ_PACKET_TYPE;
  };

  return {
    getType,
  };
}

