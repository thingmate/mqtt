export function decodeUint8ArrayToString(
  input: Uint8Array,
): string {
  return new TextDecoder().decode(input);
}
