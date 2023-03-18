import { IReadonlyStringBuffer } from '../readonly-string-buffer.type';

export type IReadonlyStringBufferOrString =
  | IReadonlyStringBuffer
  | string
  ;

export function readonlyStringBufferOrStringToString(
  input: IReadonlyStringBufferOrString,
): string {
  return (typeof input === 'string')
    ? input
    : input.toString();
}
