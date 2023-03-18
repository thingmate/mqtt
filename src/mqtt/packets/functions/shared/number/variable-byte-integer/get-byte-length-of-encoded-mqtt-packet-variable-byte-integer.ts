import { IVariableByteInteger } from './variable-byte-integer.type';

export function getByteLengthOfEncodedMqttPacketVariableByteInteger(
  input: IVariableByteInteger,
): number {
  return (input < (0x80)) // (1 << (7 * 1))
    ? 1
    : (input < (0x4000))  // (1 << (7 * 2))
      ? 2
      : (input < (0x200000))  // (1 << (7 * 3))
        ? 3
        : 4;
}
