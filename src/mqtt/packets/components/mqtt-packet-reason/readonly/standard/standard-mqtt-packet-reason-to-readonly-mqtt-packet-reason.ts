import { createReadonlyMqttPacketReason } from '../implementations/create-readonly-mqtt-packet-reason';
import { IReadonlyMqttPacketReason } from '../readonly-mqtt-packet-reason.type';
import { IStandardMqttPacketReason } from './standard-mqtt-packet-reason.type';

export function standardMqttPacketReasonToReadonlyMqttPacketReason<GCode extends number>(
  {
    code,
    message,
  }: IStandardMqttPacketReason<GCode>,
): IReadonlyMqttPacketReason<GCode> {
  return createReadonlyMqttPacketReason({
    code,
    message,
  });
}
