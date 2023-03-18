import { IReadonlyMqttPacketReason } from '../../../readonly-mqtt-packet-reason.type';
import { CONNACK_REASON_CODE } from './connack-reason-code.enum';

export type IMqttPacketConnackReason<GCode extends CONNACK_REASON_CODE> = IReadonlyMqttPacketReason<GCode>;

export type IGenericMqttPacketConnackReason = IMqttPacketConnackReason<CONNACK_REASON_CODE>;
