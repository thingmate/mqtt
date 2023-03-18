import { createReadonlyMqttPacketReason } from '../../create-readonly-mqtt-packet-reason';
import { disconnectReasonCodeToMessage } from './disconnect-reason-code-to-message';
import { DISCONNECT_REASON_CODE } from './disconnect-reason-code.enum';
import { IMqttPacketDisconnectReason } from './mqtt-packet-disconnect-reason.type';

export function createMqttPacketDisconnectReason<GCode extends DISCONNECT_REASON_CODE>(
  code: GCode,
): IMqttPacketDisconnectReason<GCode> {
  return createReadonlyMqttPacketReason<GCode>({
    code,
    message: disconnectReasonCodeToMessage(code),
  });
}



