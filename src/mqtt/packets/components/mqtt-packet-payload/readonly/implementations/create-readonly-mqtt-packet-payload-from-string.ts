import {
  createReadonlyStringBufferFromString,
} from '../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-string';
import { IReadonlyMqttPacketPayload } from '../readonly-mqtt-packet-payload.type';
import { createReadonlyMqttPacketPayloadFromStringBuffer } from './create-readonly-mqtt-packet-payload-from-string-buffer';

export function createReadonlyMqttPacketPayloadFromString(
  input: string,
): IReadonlyMqttPacketPayload {
  return createReadonlyMqttPacketPayloadFromStringBuffer(
    createReadonlyStringBufferFromString(input),
  );
}

