import { DISCONNECT_REASON_CODE } from './disconnect-reason-code.enum';

export function disconnectReasonCodeToMessage(
  reasonCode: DISCONNECT_REASON_CODE,
): string {
  switch (reasonCode) {
    case DISCONNECT_REASON_CODE.NORMAL_DISCONNECTION:
      return `Normal disconnection`;
    case DISCONNECT_REASON_CODE.DISCONNECT_WITH_WILL_MESSAGE:
      return `Disconnect with Will Message`;
    case DISCONNECT_REASON_CODE.UNSPECIFIED_ERROR:
      return `Unspecified error`;
    case DISCONNECT_REASON_CODE.MALFORMED_PACKET:
      return `Malformed Packet`;
    case DISCONNECT_REASON_CODE.PROTOCOL_ERROR:
      return `Protocol Error`;
    case DISCONNECT_REASON_CODE.IMPLEMENTATION_SPECIFIC_ERROR:
      return `Implementation specific error`;
    case DISCONNECT_REASON_CODE.NOT_AUTHORIZED:
      return `Not authorized`;
    case DISCONNECT_REASON_CODE.SERVER_BUSY:
      return `Server busy`;
    case DISCONNECT_REASON_CODE.SERVER_SHUTTING_DOWN:
      return `Server shutting down`;
    case DISCONNECT_REASON_CODE.KEEP_ALIVE_TIMEOUT:
      return `Keep Alive timeout`;
    case DISCONNECT_REASON_CODE.SESSION_TAKEN_OVER:
      return `Session taken over`;
    case DISCONNECT_REASON_CODE.TOPIC_FILTER_INVALID:
      return `Topic Filter invalid`;
    case DISCONNECT_REASON_CODE.TOPIC_NAME_INVALID:
      return `Topic Name invalid`;
    case DISCONNECT_REASON_CODE.RECEIVE_MAXIMUM_EXCEEDED:
      return `Receive Maximum exceeded`;
    case DISCONNECT_REASON_CODE.TOPIC_ALIAS_INVALID:
      return `Topic Alias invalid`;
    case DISCONNECT_REASON_CODE.PACKET_TOO_LARGE:
      return `Packet too large`;
    case DISCONNECT_REASON_CODE.MESSAGE_RATE_TOO_HIGH:
      return `Message rate too high`;
    case DISCONNECT_REASON_CODE.QUOTA_EXCEEDED:
      return `Quota exceeded`;
    case DISCONNECT_REASON_CODE.ADMINISTRATIVE_ACTION:
      return `Administrative action`;
    case DISCONNECT_REASON_CODE.PAYLOAD_FORMAT_INVALID:
      return `Payload format invalid`;
    case DISCONNECT_REASON_CODE.RETAIN_NOT_SUPPORTED:
      return `Retain not supported`;
    case DISCONNECT_REASON_CODE.QOS_NOT_SUPPORTED:
      return `QoS not supported`;
    case DISCONNECT_REASON_CODE.USE_ANOTHER_SERVER:
      return `Use another server`;
    case DISCONNECT_REASON_CODE.SERVER_MOVED:
      return `Server moved`;
    case DISCONNECT_REASON_CODE.SHARED_SUBSCRIPTIONS_NOT_SUPPORTED:
      return `Shared Subscriptions not supported`;
    case DISCONNECT_REASON_CODE.CONNECTION_RATE_EXCEEDED:
      return `Connection rate exceeded`;
    case DISCONNECT_REASON_CODE.MAXIMUM_CONNECT_TIME:
      return `Maximum connect time`;
    case DISCONNECT_REASON_CODE.SUBSCRIPTION_IDENTIFIERS_NOT_SUPPORTED:
      return `Subscription Identifiers not supported`;
    case DISCONNECT_REASON_CODE.WILDCARD_SUBSCRIPTIONS_NOT_SUPPORTED:
      return `Wildcard Subscriptions not supported`;
    default:
      throw new Error(`Unknown code: ${reasonCode}`);
  }
}
