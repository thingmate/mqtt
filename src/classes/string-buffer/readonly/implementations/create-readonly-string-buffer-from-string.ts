import { encodeStringToUint8Array } from '../../functions/encode-string-to-uint8-array';
import { IReadonlyStringBuffer } from '../readonly-string-buffer.type';
import { createReadonlyStringBuffer } from './create-readonly-string-buffer';

export function createReadonlyStringBufferFromString(
  input: string,
): IReadonlyStringBuffer {
  return createReadonlyStringBuffer({
    buffer: encodeStringToUint8Array(input),
  });
}

