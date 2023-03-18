import { IReadonlyMqttPacketReason } from '../../../readonly-mqtt-packet-reason.type';
import { PUBACK_REASON_CODE } from './puback-reason-code.enum';

export type IMqttPacketPubackReason<GCode extends PUBACK_REASON_CODE> = IReadonlyMqttPacketReason<GCode>;

export type IGenericMqttPacketPubackReason = IMqttPacketPubackReason<PUBACK_REASON_CODE>;
