import { createReadonlyMqttPacketReason } from '../../create-readonly-mqtt-packet-reason';
import { IMqttPacketSubackReason } from './mqtt-packet-suback-reason.type';
import { subackReasonCodeToMessage } from './suback-reason-code-to-message';
import { SUBACK_REASON_CODE } from './suback-reason-code.enum';

export function createMqttPacketSubackReason<GCode extends SUBACK_REASON_CODE>(
  code: GCode,
): IMqttPacketSubackReason<GCode> {
  return createReadonlyMqttPacketReason<GCode>({
    code,
    message: subackReasonCodeToMessage(code),
  });
}



