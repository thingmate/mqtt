import { IStandardMqttPacketReason } from '../../../../standard/standard-mqtt-packet-reason.type';
import { PUBREL_REASON_CODE } from '../pubrel-reason-code.enum';

export type IStandardMqttPacketPubrelReason<GCode extends PUBREL_REASON_CODE> = IStandardMqttPacketReason<GCode>;

export type IGenericStandardMqttPacketPubrelReason = IStandardMqttPacketPubrelReason<PUBREL_REASON_CODE>;
