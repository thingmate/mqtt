import { SUBACK_REASON_CODE } from './suback-reason-code.enum';

export function subackReasonCodeToMessage(
  reasonCode: SUBACK_REASON_CODE,
): string {
  switch (reasonCode) {
    case SUBACK_REASON_CODE.GRANTED_QOS_0:
      return `Granted QoS 0`;
    case SUBACK_REASON_CODE.GRANTED_QOS_1:
      return `Granted QoS 1`;
    case SUBACK_REASON_CODE.GRANTED_QOS_2:
      return `Granted QoS 2`;
    case SUBACK_REASON_CODE.UNSPECIFIED_ERROR:
      return `Unspecified error`;
    case SUBACK_REASON_CODE.IMPLEMENTATION_SPECIFIC_ERROR:
      return `Implementation specific error`;
    case SUBACK_REASON_CODE.NOT_AUTHORIZED:
      return `Not authorized`;
    case SUBACK_REASON_CODE.TOPIC_FILTER_INVALID:
      return `Topic Filter invalid`;
    case SUBACK_REASON_CODE.PACKET_IDENTIFIER_IN_USE:
      return `Packet Identifier in use`;
    case SUBACK_REASON_CODE.QUOTA_EXCEEDED:
      return `Quota exceeded`;
    case SUBACK_REASON_CODE.SHARED_SUBSCRIPTIONS_NOT_SUPPORTED:
      return `Shared Subscriptions not supported`;
    case SUBACK_REASON_CODE.SUBSCRIPTION_IDENTIFIERS_NOT_SUPPORTED:
      return `Subscription Identifiers not supported`;
    case SUBACK_REASON_CODE.WILDCARD_SUBSCRIPTIONS_NOT_SUPPORTED:
      return `Wildcard Subscriptions not supported`;
    default:
      throw new Error(`Unknown code: ${reasonCode}`);
  }
}
