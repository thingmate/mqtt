import { IReadonlyStringBuffer } from '../../../../../../../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';

export interface IMqttPacketUserPropertyEntryGetValueFunction {
  (): IReadonlyStringBuffer;
}
