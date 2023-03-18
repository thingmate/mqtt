import { createMqttPacketPubackReason } from './create-mqtt-packet-puback-reason';
import { PUBACK_REASON_CODE } from './puback-reason-code.enum';

export const STATIC_MQTT_PACKET_PUBACK_REASON_SUCCESS = createMqttPacketPubackReason(PUBACK_REASON_CODE.SUCCESS);
