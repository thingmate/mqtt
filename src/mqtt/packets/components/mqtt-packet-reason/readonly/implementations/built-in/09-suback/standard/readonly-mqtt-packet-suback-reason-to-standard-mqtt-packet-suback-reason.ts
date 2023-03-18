import {
  readonlyMqttPacketReasonToStandardMqttPacketReason,
} from '../../../../standard/readonly-mqtt-packet-reason-to-standard-mqtt-packet-reason';
import { IMqttPacketSubackReason } from '../mqtt-packet-suback-reason.type';
import { SUBACK_REASON_CODE } from '../suback-reason-code.enum';
import { IStandardMqttPacketSubackReason } from './standard-mqtt-packet-suback-reason.type';

export function readonlyMqttPacketSubackReasonToStandardMqttPacketSubackReason<GCode extends SUBACK_REASON_CODE>(
  input: IMqttPacketSubackReason<GCode>,
): IStandardMqttPacketSubackReason<GCode> {
  return readonlyMqttPacketReasonToStandardMqttPacketReason(input);
}
