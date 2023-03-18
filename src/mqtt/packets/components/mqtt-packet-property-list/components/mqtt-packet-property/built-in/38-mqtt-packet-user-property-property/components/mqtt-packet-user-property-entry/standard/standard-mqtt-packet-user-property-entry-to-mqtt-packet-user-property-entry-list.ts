import {
  createReadonlyStringBufferFromString,
} from '../../../../../../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-string';
import { createMqttPacketUserPropertyEntry } from '../implementations/create-mqtt-packet-user-property-entry';
import { IMqttPacketUserPropertyEntry } from '../mqtt-packet-user-property-entry.type';
import { IStandardMqttPacketUserPropertyEntry } from './standard-mqtt-packet-user-property-entry.type';

export function standardMqttPacketUserPropertyEntryToMqttPacketUserPropertyEntryList(
  input: IStandardMqttPacketUserPropertyEntry,
): IMqttPacketUserPropertyEntry[] {
  const entryList: IMqttPacketUserPropertyEntry[] = [];

  const keys: string[] = Object.getOwnPropertyNames(input);
  for (let i = 0, l = keys.length; i < l; i++) {
    const key: string = keys[i];
    const value: string = input[key];
    createMqttPacketUserPropertyEntry({
      key: createReadonlyStringBufferFromString(key),
      value: createReadonlyStringBufferFromString(value),
    });
  }

  return entryList;
}
