import {
  IReadonlyMqttDisconnectPacket,
} from '../../../../packets/built-in/14-mqtt-disconnect-packet/readonly/readonly-mqtt-disconnect-packet.type';
import { extractMessageAndReasonCodeFromMqttPacket } from '../_shared/extract-message-and-reason-code-from-mqtt-packet';
import { createDisconnectError } from './create-disconnect-error';
import { IDisconnectError } from './disconnect-error.type';

export function createDisconnectErrorFromMqttDisconnectPacket(
  packet: IReadonlyMqttDisconnectPacket,
): IDisconnectError {
  return createDisconnectError(extractMessageAndReasonCodeFromMqttPacket(packet));
}
