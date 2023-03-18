import { IReadonlyMqttConnackPacket } from '../../../../packets/built-in/02-mqtt-connack-packet/readonly/readonly-mqtt-connack-packet.type';
import { extractMessageAndReasonCodeFromMqttPacket } from '../_shared/extract-message-and-reason-code-from-mqtt-packet';
import { IConnectError } from './connect-error.type';
import { createConnectError } from './create-connect-error';

export function createConnectErrorFromMqttConnackPacket(
  packet: IReadonlyMqttConnackPacket,
): IConnectError {
  return createConnectError(extractMessageAndReasonCodeFromMqttPacket(packet));
}
