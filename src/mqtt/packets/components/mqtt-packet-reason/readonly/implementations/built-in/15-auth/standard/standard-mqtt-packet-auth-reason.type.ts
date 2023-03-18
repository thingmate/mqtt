import { IStandardMqttPacketReason } from '../../../../standard/standard-mqtt-packet-reason.type';
import { AUTH_REASON_CODE } from '../auth-reason-code.enum';

export type IStandardMqttPacketAuthReason<GCode extends AUTH_REASON_CODE> = IStandardMqttPacketReason<GCode>;

export type IGenericStandardMqttPacketAuthReason = IStandardMqttPacketAuthReason<AUTH_REASON_CODE>;
