import { decodeUint8ArrayToString } from '../../functions/decode-uint8-array-to-string';
import { IReadonlyStringBuffer } from '../readonly-string-buffer.type';


export interface IReadonlyStringBufferContext {
  buffer: Uint8Array;
}

export function createReadonlyStringBuffer(
  context: IReadonlyStringBufferContext,
): IReadonlyStringBuffer {
  const toUint8Array = (): Readonly<Uint8Array> => {
    return context.buffer;
  };

  const toString = (): string => {
    return decodeUint8ArrayToString(context.buffer);
  };

  return {
    toUint8Array,
    toString,
  };
}

