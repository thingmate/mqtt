import {
  createReadonlyStringBufferFromUint8Array,
} from '../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-uint8-array';
import { IReadonlyMqttPacketPayload } from '../readonly-mqtt-packet-payload.type';
import { createReadonlyMqttPacketPayloadFromStringBuffer } from './create-readonly-mqtt-packet-payload-from-string-buffer';

export function createReadonlyMqttPacketPayloadFromUint8Array(
  input: Uint8Array,
): IReadonlyMqttPacketPayload {
  return createReadonlyMqttPacketPayloadFromStringBuffer(
    createReadonlyStringBufferFromUint8Array(input),
  );
}

