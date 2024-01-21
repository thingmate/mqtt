export enum SUBACK_REASON_CODE {
  GRANTED_QOS_0 = 0,
  GRANTED_QOS_1 = 1,
  GRANTED_QOS_2 = 2,
  UNSPECIFIED_ERROR = 128,
  IMPLEMENTATION_SPECIFIC_ERROR = 131,
  NOT_AUTHORIZED = 135,
  TOPIC_FILTER_INVALID = 143,
  PACKET_IDENTIFIER_IN_USE = 145,
  QUOTA_EXCEEDED = 151,
  SHARED_SUBSCRIPTIONS_NOT_SUPPORTED = 158,
  SUBSCRIPTION_IDENTIFIERS_NOT_SUPPORTED = 161,
  WILDCARD_SUBSCRIPTIONS_NOT_SUPPORTED = 162,
}

