import { IReadonlyMqttPacketReason } from '../../../readonly-mqtt-packet-reason.type';
import { SUBACK_REASON_CODE } from './suback-reason-code.enum';

export type IMqttPacketSubackReason<GCode extends SUBACK_REASON_CODE> = IReadonlyMqttPacketReason<GCode>;

export type IGenericMqttPacketSubackReason = IMqttPacketSubackReason<SUBACK_REASON_CODE>;

