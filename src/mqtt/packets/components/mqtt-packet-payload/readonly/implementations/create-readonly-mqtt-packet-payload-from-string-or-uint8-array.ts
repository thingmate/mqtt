import { IReadonlyMqttPacketPayload } from '../readonly-mqtt-packet-payload.type';
import { createReadonlyMqttPacketPayloadFromString } from './create-readonly-mqtt-packet-payload-from-string';
import { createReadonlyMqttPacketPayloadFromUint8Array } from './create-readonly-mqtt-packet-payload-from-uint8-array';

export type IStringOrUint8Array =
  | string
  | Uint8Array
  ;

export function createReadonlyMqttPacketPayloadFromStringOrUint8Array(
  payload: IStringOrUint8Array,
): IReadonlyMqttPacketPayload {
  return (typeof payload === 'string')
    ? createReadonlyMqttPacketPayloadFromString(payload)
    : createReadonlyMqttPacketPayloadFromUint8Array(payload);
}

