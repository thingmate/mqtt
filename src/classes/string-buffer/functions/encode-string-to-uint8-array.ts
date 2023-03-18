export function encodeStringToUint8Array(
  input: string,
): Uint8Array {
  return new TextEncoder().encode(input);
}
