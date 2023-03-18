import { IReadonlyStringBuffer } from '../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IReadonlyMqttSubackPacket } from '../../../../packets/built-in/09-mqtt-suback-packet/readonly/readonly-mqtt-suback-packet.type';
import { createSubscribeError } from './create-subscribe-error';
import { ISubscribeError } from './subscribe-error.type';

export function createSubscribeErrorFromMqttSubackPacket(
  packet: IReadonlyMqttSubackPacket,
  subscriptionIndex: number,
): ISubscribeError {
  const property: IReadonlyStringBuffer | undefined = packet.getProperties().get('reasonString');

  return createSubscribeError({
    message: (property === void 0)
      ? packet.getReasons()[subscriptionIndex].getMessage()
      : property.toString(),
    reasonCode: packet.getReasons()[subscriptionIndex].getCode(),
  });
}
