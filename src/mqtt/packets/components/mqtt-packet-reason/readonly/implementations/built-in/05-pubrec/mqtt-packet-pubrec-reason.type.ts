import { IReadonlyMqttPacketReason } from '../../../readonly-mqtt-packet-reason.type';
import { PUBREC_REASON_CODE } from './pubrec-reason-code.enum';

export type IMqttPacketPubrecReason<GCode extends PUBREC_REASON_CODE> = IReadonlyMqttPacketReason<GCode>;

export type IGenericMqttPacketPubrecReason = IMqttPacketPubrecReason<PUBREC_REASON_CODE>;

