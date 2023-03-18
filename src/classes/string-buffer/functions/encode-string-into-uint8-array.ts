export function encodeStringIntoUint8Array(
  input: string,
  output: Uint8Array,
): TextEncoderEncodeIntoResult {
  return new TextEncoder().encodeInto(input, output);
}
