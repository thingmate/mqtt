import { createReadonlyMqttPacketReason } from '../../create-readonly-mqtt-packet-reason';
import { connackReasonCodeToMessage } from './connack-reason-code-to-message';
import { CONNACK_REASON_CODE } from './connack-reason-code.enum';
import { IMqttPacketConnackReason } from './mqtt-packet-connack-reason.type';

export function createMqttPacketConnackReason<GCode extends CONNACK_REASON_CODE>(
  code: GCode,
): IMqttPacketConnackReason<GCode> {
  return createReadonlyMqttPacketReason<GCode>({
    code,
    message: connackReasonCodeToMessage(code),
  });
}



