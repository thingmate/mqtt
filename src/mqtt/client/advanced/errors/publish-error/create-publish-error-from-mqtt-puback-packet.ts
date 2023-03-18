import { IReadonlyMqttPubackPacket } from '../../../../packets/built-in/04-mqtt-puback-packet/readonly/readonly-mqtt-puback-packet.type';
import { extractMessageAndReasonCodeFromMqttPacket } from '../_shared/extract-message-and-reason-code-from-mqtt-packet';
import { createPublishError } from './create-publish-error';
import { IPublishError } from './publish-error.type';

export function createPublishErrorFromMqttPubackPacket(
  packet: IReadonlyMqttPubackPacket,
): IPublishError {
  return createPublishError(extractMessageAndReasonCodeFromMqttPacket(packet));
}
