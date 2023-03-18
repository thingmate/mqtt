import {
  readonlyMqttPacketReasonToStandardMqttPacketReason,
} from '../../../../standard/readonly-mqtt-packet-reason-to-standard-mqtt-packet-reason';
import { IMqttPacketPubackReason } from '../mqtt-packet-puback-reason.type';
import { PUBACK_REASON_CODE } from '../puback-reason-code.enum';
import { IStandardMqttPacketPubackReason } from './standard-mqtt-packet-puback-reason.type';

export function readonlyMqttPacketPubackReasonToStandardMqttPacketPubackReason<GCode extends PUBACK_REASON_CODE>(
  input: IMqttPacketPubackReason<GCode>,
): IStandardMqttPacketPubackReason<GCode> {
  return readonlyMqttPacketReasonToStandardMqttPacketReason(input);
}
