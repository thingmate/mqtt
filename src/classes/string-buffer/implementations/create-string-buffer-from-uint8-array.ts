import { IStringBuffer } from '../string-buffer.type';
import { createStringBuffer } from './create-string-buffer';

export function createStringBufferFromUint8Array(
  buffer: Uint8Array,
): IStringBuffer {
  return createStringBuffer({
    buffer,
  });
}

