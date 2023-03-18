import { IReadonlyMqttPacketReason } from '../../../readonly-mqtt-packet-reason.type';
import { PUBCOMP_REASON_CODE } from './pubcomp-reason-code.enum';

export type IMqttPacketPubcompReason<GCode extends PUBCOMP_REASON_CODE> = IReadonlyMqttPacketReason<GCode>;

export type IGenericMqttPacketPubcompReason = IMqttPacketPubcompReason<PUBCOMP_REASON_CODE>;
