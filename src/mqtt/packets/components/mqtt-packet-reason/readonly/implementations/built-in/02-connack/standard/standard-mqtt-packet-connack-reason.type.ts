import { IStandardMqttPacketReason } from '../../../../standard/standard-mqtt-packet-reason.type';
import { CONNACK_REASON_CODE } from '../connack-reason-code.enum';

export type IStandardMqttPacketConnackReason<GCode extends CONNACK_REASON_CODE> = IStandardMqttPacketReason<GCode>;

export type IGenericStandardMqttPacketConnackReason = IStandardMqttPacketConnackReason<CONNACK_REASON_CODE>;
