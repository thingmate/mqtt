import { IStandardMqttPacketReason } from '../../../../standard/standard-mqtt-packet-reason.type';
import { PUBCOMP_REASON_CODE } from '../pubcomp-reason-code.enum';

export type IStandardMqttPacketPubcompReason<GCode extends PUBCOMP_REASON_CODE> = IStandardMqttPacketReason<GCode>;

export type IGenericStandardMqttPacketPubcompReason = IStandardMqttPacketPubcompReason<PUBCOMP_REASON_CODE>;
