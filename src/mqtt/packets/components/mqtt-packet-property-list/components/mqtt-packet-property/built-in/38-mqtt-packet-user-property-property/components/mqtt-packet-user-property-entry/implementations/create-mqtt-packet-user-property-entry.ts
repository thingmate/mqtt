import { IReadonlyStringBuffer } from '../../../../../../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IMqttPacketUserPropertyEntry } from '../mqtt-packet-user-property-entry.type';

export interface ICreateMqttConnectPacketOptions {
  key: IReadonlyStringBuffer;
  value: IReadonlyStringBuffer;
}

export function createMqttPacketUserPropertyEntry(
  {
    key,
    value,
  }: ICreateMqttConnectPacketOptions,
): IMqttPacketUserPropertyEntry {
  const getKey = (): IReadonlyStringBuffer => {
    return key;
  };

  const getValue = (): IReadonlyStringBuffer => {
    return value;
  };

  return {
    getKey,
    getValue,
  };
}

