import { IStandardMqttPacketReason } from '../../../../standard/standard-mqtt-packet-reason.type';
import { PUBREC_REASON_CODE } from '../pubrec-reason-code.enum';

export type IStandardMqttPacketPubrecReason<GCode extends PUBREC_REASON_CODE> = IStandardMqttPacketReason<GCode>;

export type IGenericStandardMqttPacketPubrecReason = IStandardMqttPacketPubrecReason<PUBREC_REASON_CODE>;
