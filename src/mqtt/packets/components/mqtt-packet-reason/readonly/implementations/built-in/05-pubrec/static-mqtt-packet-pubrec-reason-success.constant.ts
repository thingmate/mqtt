import { createMqttPacketPubrecReason } from './create-mqtt-packet-pubrec-reason';
import { PUBREC_REASON_CODE } from './pubrec-reason-code.enum';

export const STATIC_MQTT_PACKET_PUBREC_REASON_SUCCESS = createMqttPacketPubrecReason(PUBREC_REASON_CODE.SUCCESS);
