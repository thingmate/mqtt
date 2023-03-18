import { UNSUBACK_REASON_CODE } from './unsuback-reason-code.enum';

export function unsubackReasonCodeToMessage(
  reasonCode: UNSUBACK_REASON_CODE,
): string {
  switch (reasonCode) {
    case UNSUBACK_REASON_CODE.SUCCESS:
      return `Success`;
    case UNSUBACK_REASON_CODE.NO_SUBSCRIPTION_EXISTED:
      return `No subscription existed`;
    case UNSUBACK_REASON_CODE.UNSPECIFIED_ERROR:
      return `Unspecified error`;
    case UNSUBACK_REASON_CODE.IMPLEMENTATION_SPECIFIC_ERROR:
      return `Implementation specific error`;
    case UNSUBACK_REASON_CODE.NOT_AUTHORIZED:
      return `Not authorized`;
    case UNSUBACK_REASON_CODE.TOPIC_FILTER_INVALID:
      return `Topic Filter invalid`;
    case UNSUBACK_REASON_CODE.PACKET_IDENTIFIER_IN_USE:
      return `Packet Identifier in use`;
    default:
      throw new Error(`Unknown code: ${reasonCode}`);
  }
}
