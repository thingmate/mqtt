import { createReadonlyMqttPacketReason } from '../../create-readonly-mqtt-packet-reason';
import { authReasonCodeToMessage } from './auth-reason-code-to-message';
import { AUTH_REASON_CODE } from './auth-reason-code.enum';
import { IMqttPacketAuthReason } from './mqtt-packet-auth-reason.type';

export function createMqttPacketAuthReason<GCode extends AUTH_REASON_CODE>(
  code: GCode,
): IMqttPacketAuthReason<GCode> {
  return createReadonlyMqttPacketReason<GCode>({
    code,
    message: authReasonCodeToMessage(code),
  });
}



