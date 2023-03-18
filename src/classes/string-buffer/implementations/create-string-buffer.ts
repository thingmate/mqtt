import { encodeStringToUint8Array } from '../functions/encode-string-to-uint8-array';
import { createReadonlyStringBuffer, IReadonlyStringBufferContext } from '../readonly/implementations/create-readonly-string-buffer';
import { IStringBuffer } from '../string-buffer.type';

export interface IStringBufferContext extends IReadonlyStringBufferContext {
}

export function createStringBuffer(
  context: IStringBufferContext,
): IStringBuffer {
  const readonlyStringBuffer = createReadonlyStringBuffer(context);

  const set = (
    input: string | Uint8Array,
  ): void => {
    if (typeof input === 'string') {
      context.buffer = encodeStringToUint8Array(input);
    } else {
      context.buffer = input;
    }
  };

  return {
    ...readonlyStringBuffer,
    set,
  };
}
