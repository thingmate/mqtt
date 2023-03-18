export function verifyRemainingPacketLength(
  remainingPacketLength: number,
): asserts remainingPacketLength is 0 {
  if (remainingPacketLength !== 0) {
    throw new Error(`(remainingPacketLength !== 0) => ${remainingPacketLength}`);
  }
}
