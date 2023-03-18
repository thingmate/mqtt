export function createStreamClosedBeforePacketReceived(
  packetName: string,
): string {
  return `Stream closed before ${packetName} packet received`;
}
