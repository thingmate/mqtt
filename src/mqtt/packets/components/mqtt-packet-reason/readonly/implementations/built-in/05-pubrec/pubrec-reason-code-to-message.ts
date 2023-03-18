import { PUBREC_REASON_CODE } from './pubrec-reason-code.enum';

export function pubrecReasonCodeToMessage(
  reasonCode: PUBREC_REASON_CODE,
): string {
  switch (reasonCode) {
    case PUBREC_REASON_CODE.SUCCESS:
      return `Success`;
    case PUBREC_REASON_CODE.NO_MATCHING_SUBSCRIBERS:
      return `No matching subscribers`;
    case PUBREC_REASON_CODE.UNSPECIFIED_ERROR:
      return `Unspecified error`;
    case PUBREC_REASON_CODE.IMPLEMENTATION_SPECIFIC_ERROR:
      return `Implementation specific error`;
    case PUBREC_REASON_CODE.NOT_AUTHORIZED:
      return `Not authorized`;
    case PUBREC_REASON_CODE.TOPIC_NAME_INVALID:
      return `Topic Name invalid`;
    case PUBREC_REASON_CODE.PACKET_IDENTIFIER_IN_USE:
      return `Packet Identifier in use`;
    case PUBREC_REASON_CODE.QUOTA_EXCEEDED:
      return `Quota exceeded`;
    case PUBREC_REASON_CODE.PAYLOAD_FORMAT_INVALID:
      return `Payload format invalid`;
    default:
      throw new Error(`Unknown code: ${reasonCode}`);
  }
}
