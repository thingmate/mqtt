import { AUTH_REASON_CODE } from './auth-reason-code.enum';
import { createMqttPacketAuthReason } from './create-mqtt-packet-auth-reason';

export const STATIC_MQTT_PACKET_AUTH_REASON_SUCCESS = createMqttPacketAuthReason(AUTH_REASON_CODE.SUCCESS);
