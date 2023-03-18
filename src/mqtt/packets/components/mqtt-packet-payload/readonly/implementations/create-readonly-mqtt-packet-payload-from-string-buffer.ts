import { IReadonlyStringBuffer } from '../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IReadonlyMqttPacketPayload } from '../readonly-mqtt-packet-payload.type';

export function createReadonlyMqttPacketPayloadFromStringBuffer(
  stringBuffer: IReadonlyStringBuffer,
): IReadonlyMqttPacketPayload {

  return {
    ...stringBuffer,
  };
}

