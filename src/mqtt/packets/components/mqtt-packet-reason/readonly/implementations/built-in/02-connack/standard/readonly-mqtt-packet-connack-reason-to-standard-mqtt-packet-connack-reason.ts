import {
  readonlyMqttPacketReasonToStandardMqttPacketReason,
} from '../../../../standard/readonly-mqtt-packet-reason-to-standard-mqtt-packet-reason';
import { CONNACK_REASON_CODE } from '../connack-reason-code.enum';
import { IMqttPacketConnackReason } from '../mqtt-packet-connack-reason.type';
import { IStandardMqttPacketConnackReason } from './standard-mqtt-packet-connack-reason.type';

export function readonlyMqttPacketConnackReasonToStandardMqttPacketConnackReason<GCode extends CONNACK_REASON_CODE>(
  input: IMqttPacketConnackReason<GCode>,
): IStandardMqttPacketConnackReason<GCode> {
  return readonlyMqttPacketReasonToStandardMqttPacketReason(input);
}
