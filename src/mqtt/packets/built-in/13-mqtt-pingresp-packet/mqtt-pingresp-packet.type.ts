import { IMqttPacket } from '../../components/mqtt-packet/mqtt-packet.type';
import { IMqttPingrespPacketType } from './constants/mqtt-pingresp-packet-type.constant';

// https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901200

export type IMqttPingrespPacket = IMqttPacket<IMqttPingrespPacketType>;
