import { createMqttPacketPubcompReason } from './create-mqtt-packet-pubcomp-reason';
import { PUBCOMP_REASON_CODE } from './pubcomp-reason-code.enum';

export const STATIC_MQTT_PACKET_PUBCOMP_REASON_SUCCESS = createMqttPacketPubcompReason(PUBCOMP_REASON_CODE.SUCCESS);
