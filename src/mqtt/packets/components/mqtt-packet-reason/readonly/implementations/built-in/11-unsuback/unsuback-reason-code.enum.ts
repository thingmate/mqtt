export const enum UNSUBACK_REASON_CODE {
  SUCCESS = 0,
  NO_SUBSCRIPTION_EXISTED = 17,
  UNSPECIFIED_ERROR = 128,
  IMPLEMENTATION_SPECIFIC_ERROR = 131,
  NOT_AUTHORIZED = 135,
  TOPIC_FILTER_INVALID = 143,
  PACKET_IDENTIFIER_IN_USE = 145,
}
