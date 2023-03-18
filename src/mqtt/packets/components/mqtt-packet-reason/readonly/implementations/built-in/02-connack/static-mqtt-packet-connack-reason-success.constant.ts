import { CONNACK_REASON_CODE } from './connack-reason-code.enum';
import { createMqttPacketConnackReason } from './create-mqtt-packet-connack-reason';

export const STATIC_MQTT_PACKET_CONNACK_REASON_SUCCESS = createMqttPacketConnackReason(CONNACK_REASON_CODE.SUCCESS);
