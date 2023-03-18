import { IReadonlyMqttPacketReason } from '../../../readonly-mqtt-packet-reason.type';
import { UNSUBACK_REASON_CODE } from './unsuback-reason-code.enum';

export type IMqttPacketUnsubackReason<GCode extends UNSUBACK_REASON_CODE> = IReadonlyMqttPacketReason<GCode>;

export type IGenericMqttPacketUnsubackReason = IMqttPacketUnsubackReason<UNSUBACK_REASON_CODE>;
