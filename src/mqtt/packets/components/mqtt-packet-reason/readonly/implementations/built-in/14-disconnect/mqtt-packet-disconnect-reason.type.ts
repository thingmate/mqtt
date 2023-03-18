import { IReadonlyMqttPacketReason } from '../../../readonly-mqtt-packet-reason.type';
import { DISCONNECT_REASON_CODE } from './disconnect-reason-code.enum';

export type IMqttPacketDisconnectReason<GCode extends DISCONNECT_REASON_CODE> = IReadonlyMqttPacketReason<GCode>;

export type IGenericMqttPacketDisconnectReason = IMqttPacketDisconnectReason<DISCONNECT_REASON_CODE>;
