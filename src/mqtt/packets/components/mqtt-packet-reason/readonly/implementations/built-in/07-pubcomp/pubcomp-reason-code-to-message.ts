import { PUBCOMP_REASON_CODE } from './pubcomp-reason-code.enum';

export function pubcompReasonCodeToMessage(
  reasonCode: PUBCOMP_REASON_CODE,
): string {
  switch (reasonCode) {
    case PUBCOMP_REASON_CODE.SUCCESS:
      return `Success`;
    case PUBCOMP_REASON_CODE.PACKET_IDENTIFIER_NOT_FOUND:
      return `Packet Identifier not found`;
    default:
      throw new Error(`Unknown code: ${reasonCode}`);
  }
}
