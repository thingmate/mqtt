import { createMqttPacketDisconnectReason } from './create-mqtt-packet-disconnect-reason';
import { DISCONNECT_REASON_CODE } from './disconnect-reason-code.enum';

export const STATIC_MQTT_PACKET_DISCONNECT_REASON_SUCCESS = createMqttPacketDisconnectReason(DISCONNECT_REASON_CODE.NORMAL_DISCONNECTION);
