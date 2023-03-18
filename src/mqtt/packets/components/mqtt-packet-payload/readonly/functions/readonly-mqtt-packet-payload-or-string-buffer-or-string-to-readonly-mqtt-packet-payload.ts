import {
  IReadonlyStringBufferOrString,
} from '../../../../../../classes/string-buffer/readonly/functions/readonly-string-buffer-or-string-to-string';
import { createReadonlyMqttPacketPayloadFromString } from '../implementations/create-readonly-mqtt-packet-payload-from-string';
import { createReadonlyMqttPacketPayloadFromStringBuffer } from '../implementations/create-readonly-mqtt-packet-payload-from-string-buffer';
import { IReadonlyMqttPacketPayload } from '../readonly-mqtt-packet-payload.type';

export type IReadonlyMqttPacketPayloadOrReadonlyStringBufferOrString =
  | IReadonlyMqttPacketPayload
  | IReadonlyStringBufferOrString
  ;

export function readonlyMqttPacketPayloadOrReadonlyStringBufferOrStringToReadonlyMqttPacketPayload(
  input: IReadonlyMqttPacketPayloadOrReadonlyStringBufferOrString,
): IReadonlyMqttPacketPayload {
  return (typeof input === 'string')
    ? createReadonlyMqttPacketPayloadFromString(input)
    : createReadonlyMqttPacketPayloadFromStringBuffer(input);
}
