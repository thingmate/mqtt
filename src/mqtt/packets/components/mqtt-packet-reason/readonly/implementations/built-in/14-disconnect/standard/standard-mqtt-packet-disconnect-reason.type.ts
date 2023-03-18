import { IStandardMqttPacketReason } from '../../../../standard/standard-mqtt-packet-reason.type';
import { DISCONNECT_REASON_CODE } from '../disconnect-reason-code.enum';

export type IStandardMqttPacketDisconnectReason<GCode extends DISCONNECT_REASON_CODE> = IStandardMqttPacketReason<GCode>;

export type IGenericStandardMqttPacketDisconnectReason = IStandardMqttPacketDisconnectReason<DISCONNECT_REASON_CODE>;
