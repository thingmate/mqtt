import { PUBACK_REASON_CODE } from './puback-reason-code.enum';

export function pubackReasonCodeToMessage(
  reasonCode: PUBACK_REASON_CODE,
): string {
  switch (reasonCode) {
    case PUBACK_REASON_CODE.SUCCESS:
      return `Success`;
    case PUBACK_REASON_CODE.NO_MATCHING_SUBSCRIBERS:
      return `No matching subscribers`;
    case PUBACK_REASON_CODE.UNSPECIFIED_ERROR:
      return `Unspecified error`;
    case PUBACK_REASON_CODE.IMPLEMENTATION_SPECIFIC_ERROR:
      return `Implementation specific error`;
    case PUBACK_REASON_CODE.NOT_AUTHORIZED:
      return `Not authorized`;
    case PUBACK_REASON_CODE.TOPIC_NAME_INVALID:
      return `Topic Name invalid`;
    case PUBACK_REASON_CODE.PACKET_IDENTIFIER_IN_USE:
      return `Packet identifier in use`;
    case PUBACK_REASON_CODE.QUOTA_EXCEEDED:
      return `Quota exceeded`;
    case PUBACK_REASON_CODE.PAYLOAD_FORMAT_INVALID:
      return `Payload format invalid`;
    default:
      throw new Error(`Unknown code: ${reasonCode}`);
  }
}
