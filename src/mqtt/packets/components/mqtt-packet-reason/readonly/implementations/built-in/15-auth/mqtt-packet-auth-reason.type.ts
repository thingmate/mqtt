import { IReadonlyMqttPacketReason } from '../../../readonly-mqtt-packet-reason.type';
import { AUTH_REASON_CODE } from './auth-reason-code.enum';

export type IMqttPacketAuthReason<GCode extends AUTH_REASON_CODE> = IReadonlyMqttPacketReason<GCode>;

export type IGenericMqttPacketAuthReason = IMqttPacketAuthReason<AUTH_REASON_CODE>;

