import { PUBREL_REASON_CODE } from './pubrel-reason-code.enum';

export function pubrelReasonCodeToMessage(
  reasonCode: PUBREL_REASON_CODE,
): string {
  switch (reasonCode) {
    case PUBREL_REASON_CODE.SUCCESS:
      return `Success`;
    case PUBREL_REASON_CODE.PACKET_IDENTIFIER_NOT_FOUND:
      return `Packet Identifier not found`;
    default:
      throw new Error(`Unknown code: ${reasonCode}`);
  }
}
