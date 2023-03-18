import { CONNACK_REASON_CODE } from './connack-reason-code.enum';

export function connackReasonCodeToMessage(
  reasonCode: CONNACK_REASON_CODE,
): string {
  switch (reasonCode) {
    case CONNACK_REASON_CODE.SUCCESS:
      return `Success`;
    case CONNACK_REASON_CODE.UNSPECIFIED_ERROR:
      return `Unspecified error`;
    case CONNACK_REASON_CODE.MALFORMED_PACKET:
      return `Malformed Packet`;
    case CONNACK_REASON_CODE.PROTOCOL_ERROR:
      return `Protocol Error`;
    case CONNACK_REASON_CODE.IMPLEMENTATION_SPECIFIC_ERROR:
      return `Implementation specific error`;
    case CONNACK_REASON_CODE.UNSUPPORTED_PROTOCOL_VERSION:
      return `Unsupported Protocol Version`;
    case CONNACK_REASON_CODE.CLIENT_IDENTIFIER_NOT_VALID:
      return `Client Identifier not valid`;
    case CONNACK_REASON_CODE.BAD_USER_NAME_OR_PASSWORD:
      return `Bad User Name or Password`;
    case CONNACK_REASON_CODE.NOT_AUTHORIZED:
      return `Not authorized`;
    case CONNACK_REASON_CODE.SERVER_UNAVAILABLE:
      return `Server unavailable`;
    case CONNACK_REASON_CODE.SERVER_BUSY:
      return `Server busy`;
    case CONNACK_REASON_CODE.BANNED:
      return `Banned`;
    case CONNACK_REASON_CODE.BAD_AUTHENTICATION_METHOD:
      return `Bad authentication method`;
    case CONNACK_REASON_CODE.TOPIC_NAME_INVALID:
      return `Topic Name invalid`;
    case CONNACK_REASON_CODE.PACKET_TOO_LARGE:
      return `Packet too large`;
    case CONNACK_REASON_CODE.QUOTA_EXCEEDED:
      return `Quota exceeded`;
    case CONNACK_REASON_CODE.PAYLOAD_FORMAT_INVALID:
      return `Payload format invalid`;
    case CONNACK_REASON_CODE.RETAIN_NOT_SUPPORTED:
      return `Retain not supported`;
    case CONNACK_REASON_CODE.QOS_NOT_SUPPORTED:
      return `QoS not supported`;
    case CONNACK_REASON_CODE.USE_ANOTHER_SERVER:
      return `Use another server`;
    case CONNACK_REASON_CODE.SERVER_MOVED:
      return `Server moved`;
    case CONNACK_REASON_CODE.ConnackION_RATE_EXCEEDED:
      return `Connackion rate exceeded`;
    default:
      throw new Error(`Unknown code: ${reasonCode}`);
  }
}
