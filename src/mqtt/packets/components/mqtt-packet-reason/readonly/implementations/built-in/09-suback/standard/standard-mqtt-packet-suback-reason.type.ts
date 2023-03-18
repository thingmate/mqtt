import { IStandardMqttPacketReason } from '../../../../standard/standard-mqtt-packet-reason.type';
import { SUBACK_REASON_CODE } from '../suback-reason-code.enum';

export type IStandardMqttPacketSubackReason<GCode extends SUBACK_REASON_CODE> = IStandardMqttPacketReason<GCode>;

export type IGenericStandardMqttPacketSubackReason = IStandardMqttPacketSubackReason<SUBACK_REASON_CODE>;
