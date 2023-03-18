import { IStandardMqttPacketReason } from '../../../../standard/standard-mqtt-packet-reason.type';
import { UNSUBACK_REASON_CODE } from '../unsuback-reason-code.enum';

export type IStandardMqttPacketUnsubackReason<GCode extends UNSUBACK_REASON_CODE> = IStandardMqttPacketReason<GCode>;

export type IGenericStandardMqttPacketUnsubackReason = IStandardMqttPacketUnsubackReason<UNSUBACK_REASON_CODE>;
