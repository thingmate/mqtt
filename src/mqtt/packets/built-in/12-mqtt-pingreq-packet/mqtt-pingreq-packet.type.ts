import { IMqttPacket } from '../../components/mqtt-packet/mqtt-packet.type';
import { IMqttPingreqPacketType } from './constants/mqtt-pingreq-packet-type.constant';

// https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901195

export type IMqttPingreqPacket = IMqttPacket<IMqttPingreqPacketType>;
