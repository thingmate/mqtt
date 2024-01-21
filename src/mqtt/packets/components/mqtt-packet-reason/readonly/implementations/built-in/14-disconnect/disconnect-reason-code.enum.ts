export enum DISCONNECT_REASON_CODE {
  NORMAL_DISCONNECTION = 0,
  DISCONNECT_WITH_WILL_MESSAGE = 4,
  UNSPECIFIED_ERROR = 128,
  MALFORMED_PACKET = 129,
  PROTOCOL_ERROR = 130,
  IMPLEMENTATION_SPECIFIC_ERROR = 131,
  NOT_AUTHORIZED = 135,
  SERVER_BUSY = 137,
  SERVER_SHUTTING_DOWN = 139,
  KEEP_ALIVE_TIMEOUT = 141,
  SESSION_TAKEN_OVER = 142,
  TOPIC_FILTER_INVALID = 143,
  TOPIC_NAME_INVALID = 144,
  RECEIVE_MAXIMUM_EXCEEDED = 147,
  TOPIC_ALIAS_INVALID = 148,
  PACKET_TOO_LARGE = 149,
  MESSAGE_RATE_TOO_HIGH = 150,
  QUOTA_EXCEEDED = 151,
  ADMINISTRATIVE_ACTION = 152,
  PAYLOAD_FORMAT_INVALID = 153,
  RETAIN_NOT_SUPPORTED = 154,
  QOS_NOT_SUPPORTED = 155,
  USE_ANOTHER_SERVER = 156,
  SERVER_MOVED = 157,
  SHARED_SUBSCRIPTIONS_NOT_SUPPORTED = 158,
  CONNECTION_RATE_EXCEEDED = 159,
  MAXIMUM_CONNECT_TIME = 160,
  SUBSCRIPTION_IDENTIFIERS_NOT_SUPPORTED = 161,
  WILDCARD_SUBSCRIPTIONS_NOT_SUPPORTED = 162,
}

