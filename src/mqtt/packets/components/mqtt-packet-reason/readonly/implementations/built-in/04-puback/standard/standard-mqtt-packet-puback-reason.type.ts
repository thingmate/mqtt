import { IStandardMqttPacketReason } from '../../../../standard/standard-mqtt-packet-reason.type';
import { PUBACK_REASON_CODE } from '../puback-reason-code.enum';

export type IStandardMqttPacketPubackReason<GCode extends PUBACK_REASON_CODE> = IStandardMqttPacketReason<GCode>;

export type IGenericStandardMqttPacketPubackReason = IStandardMqttPacketPubackReason<PUBACK_REASON_CODE>;
