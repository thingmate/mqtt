import { encodeStringToUint8Array } from '../functions/encode-string-to-uint8-array';
import { IStringBuffer } from '../string-buffer.type';
import { createStringBuffer } from './create-string-buffer';

export function createStringBufferFromString(
  input: string,
): IStringBuffer {
  return createStringBuffer({
    buffer: encodeStringToUint8Array(input),
  });
}

