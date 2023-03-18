import { createMqttPacketPubrelReason } from './create-mqtt-packet-pubrel-reason';
import { PUBREL_REASON_CODE } from './pubrel-reason-code.enum';

export const STATIC_MQTT_PACKET_PUBREL_REASON_SUCCESS = createMqttPacketPubrelReason(PUBREL_REASON_CODE.SUCCESS);
