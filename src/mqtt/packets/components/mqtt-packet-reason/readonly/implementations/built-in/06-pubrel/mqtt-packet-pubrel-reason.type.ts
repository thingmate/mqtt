import { IReadonlyMqttPacketReason } from '../../../readonly-mqtt-packet-reason.type';
import { PUBREL_REASON_CODE } from './pubrel-reason-code.enum';

export type IMqttPacketPubrelReason<GCode extends PUBREL_REASON_CODE> = IReadonlyMqttPacketReason<GCode>;

export type IGenericMqttPacketPubrelReason = IMqttPacketPubrelReason<PUBREL_REASON_CODE>;

