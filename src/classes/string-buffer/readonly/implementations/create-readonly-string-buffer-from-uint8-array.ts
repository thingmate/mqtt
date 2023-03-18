import { IReadonlyStringBuffer } from '../readonly-string-buffer.type';
import { createReadonlyStringBuffer } from './create-readonly-string-buffer';

export function createReadonlyStringBufferFromUint8Array(
  input: Uint8Array,
): IReadonlyStringBuffer {
  return createReadonlyStringBuffer({
    buffer: input,
  });
}

