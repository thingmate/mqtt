import { IByteIteratorDecoder } from '../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_CODE,
} from '../../../built-in/01-mqtt-packet-payload-format-indicator-property/constants/mqtt-packet-payload-format-indicator-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketPayloadFormatIndicatorPropertyHavingFirstByte,
} from '../../../built-in/01-mqtt-packet-payload-format-indicator-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-payload-format-indicator-property-having-first-byte';
import {
  MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_CODE,
} from '../../../built-in/02-mqtt-packet-message-expiry-interval-property/constants/mqtt-packet-message-expiry-interval-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketMessageExpiryIntervalPropertyHavingFirstByte,
} from '../../../built-in/02-mqtt-packet-message-expiry-interval-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-message-expiry-interval-property-having-first-byte';
import {
  MQTT_PACKET_CONTENT_TYPE_PROPERTY_CODE,
} from '../../../built-in/03-mqtt-packet-content-type-property/constants/mqtt-packet-content-type-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketContentTypePropertyHavingFirstByte,
} from '../../../built-in/03-mqtt-packet-content-type-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-content-type-property-having-first-byte';
import {
  MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_CODE,
} from '../../../built-in/08-mqtt-packet-response-topic-property/constants/mqtt-packet-response-topic-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketResponseTopicPropertyHavingFirstByte,
} from '../../../built-in/08-mqtt-packet-response-topic-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-response-topic-property-having-first-byte';
import {
  MQTT_PACKET_CORRELATION_DATA_PROPERTY_CODE,
} from '../../../built-in/09-mqtt-packet-correlation-data-property/constants/mqtt-packet-correlation-data-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketCorrelationDataPropertyHavingFirstByte,
} from '../../../built-in/09-mqtt-packet-correlation-data-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-correlation-data-property-having-first-byte';
import {
  MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_CODE,
} from '../../../built-in/11-mqtt-packet-subscription-identifier-property/constants/mqtt-packet-subscription-identifier-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketSubscriptionIdentifierPropertyHavingFirstByte,
} from '../../../built-in/11-mqtt-packet-subscription-identifier-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-subscription-identifier-property-having-first-byte';
import {
  MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_CODE,
} from '../../../built-in/17-mqtt-packet-session-expiry-interval-property/constants/mqtt-packet-session-expiry-interval-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketSessionExpiryIntervalPropertyHavingFirstByte,
} from '../../../built-in/17-mqtt-packet-session-expiry-interval-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-session-expiry-interval-property-having-first-byte';
import {
  MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_CODE,
} from '../../../built-in/18-mqtt-packet-assigned-client-identifier-property/constants/mqtt-packet-assigned-client-identifier-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketAssignedClientIdentifierPropertyHavingFirstByte,
} from '../../../built-in/18-mqtt-packet-assigned-client-identifier-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-assigned-client-identifier-property-having-first-byte';
import {
  MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_CODE,
} from '../../../built-in/19-mqtt-packet-server-keep-alive-property/constants/mqtt-packet-server-keep-alive-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketServerKeepAlivePropertyHavingFirstByte,
} from '../../../built-in/19-mqtt-packet-server-keep-alive-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-server-keep-alive-property-having-first-byte';
import {
  MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_CODE,
} from '../../../built-in/21-mqtt-packet-authentication-method-property/constants/mqtt-packet-authentication-method-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketAuthenticationMethodPropertyHavingFirstByte,
} from '../../../built-in/21-mqtt-packet-authentication-method-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-authentication-method-property-having-first-byte';
import {
  MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_CODE,
} from '../../../built-in/22-mqtt-packet-authentication-data-property/constants/mqtt-packet-authentication-data-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketAuthenticationDataPropertyHavingFirstByte,
} from '../../../built-in/22-mqtt-packet-authentication-data-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-authentication-data-property-having-first-byte';
import {
  MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_CODE,
} from '../../../built-in/23-mqtt-packet-request-problem-information-property/constants/mqtt-packet-request-problem-information-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketRequestProblemInformationPropertyHavingFirstByte,
} from '../../../built-in/23-mqtt-packet-request-problem-information-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-request-problem-information-property-having-first-byte';
import {
  MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_CODE,
} from '../../../built-in/24-mqtt-packet-will-delay-interval-property/constants/mqtt-packet-will-delay-interval-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketWillDelayIntervalPropertyHavingFirstByte,
} from '../../../built-in/24-mqtt-packet-will-delay-interval-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-will-delay-interval-property-having-first-byte';
import {
  MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_CODE,
} from '../../../built-in/25-mqtt-packet-request-response-information-property/constants/mqtt-packet-request-response-information-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketRequestResponseInformationPropertyHavingFirstByte,
} from '../../../built-in/25-mqtt-packet-request-response-information-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-request-response-information-property-having-first-byte';
import {
  MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_CODE,
} from '../../../built-in/26-mqtt-packet-response-information-property/constants/mqtt-packet-response-information-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketResponseInformationPropertyHavingFirstByte,
} from '../../../built-in/26-mqtt-packet-response-information-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-response-information-property-having-first-byte';
import {
  MQTT_PACKET_SERVER_REFERENCE_PROPERTY_CODE,
} from '../../../built-in/28-mqtt-packet-server-reference-property/constants/mqtt-packet-server-reference-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketServerReferencePropertyHavingFirstByte,
} from '../../../built-in/28-mqtt-packet-server-reference-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-server-reference-property-having-first-byte';
import {
  MQTT_PACKET_REASON_STRING_PROPERTY_CODE,
} from '../../../built-in/31-mqtt-packet-reason-string-property/constants/mqtt-packet-reason-string-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketReasonStringPropertyHavingFirstByte,
} from '../../../built-in/31-mqtt-packet-reason-string-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-reason-string-property-having-first-byte';
import {
  MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_CODE,
} from '../../../built-in/33-mqtt-packet-receive-maximum-property/constants/mqtt-packet-receive-maximum-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketReceiveMaximumPropertyHavingFirstByte,
} from '../../../built-in/33-mqtt-packet-receive-maximum-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-receive-maximum-property-having-first-byte';
import {
  MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_CODE,
} from '../../../built-in/34-mqtt-packet-topic-alias-maximum-property/constants/mqtt-packet-topic-alias-maximum-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketTopicAliasMaximumPropertyHavingFirstByte,
} from '../../../built-in/34-mqtt-packet-topic-alias-maximum-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-topic-alias-maximum-property-having-first-byte';
import {
  MQTT_PACKET_TOPIC_ALIAS_PROPERTY_CODE,
} from '../../../built-in/35-mqtt-packet-topic-alias-property/constants/mqtt-packet-topic-alias-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketTopicAliasPropertyHavingFirstByte,
} from '../../../built-in/35-mqtt-packet-topic-alias-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-topic-alias-property-having-first-byte';
import {
  MQTT_PACKET_MAXIMUM_QOS_PROPERTY_CODE,
} from '../../../built-in/36-mqtt-packet-maximum-qos-property/constants/mqtt-packet-maximum-qos-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketMaximumQoSPropertyHavingFirstByte,
} from '../../../built-in/36-mqtt-packet-maximum-qos-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-maximum-qos-property-having-first-byte';
import {
  MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_CODE,
} from '../../../built-in/37-mqtt-packet-retain-available-property/constants/mqtt-packet-retain-available-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketRetainAvailablePropertyHavingFirstByte,
} from '../../../built-in/37-mqtt-packet-retain-available-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-retain-available-property-having-first-byte';
import {
  MQTT_PACKET_USER_PROPERTY_CODE,
} from '../../../built-in/38-mqtt-packet-user-property-property/constants/mqtt-packet-user-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketUserPropertyHavingFirstByte,
} from '../../../built-in/38-mqtt-packet-user-property-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-user-property-having-first-byte';
import {
  MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_CODE,
} from '../../../built-in/39-mqtt-packet-maximum-packet-size-property/constants/mqtt-packet-maximum-packet-size-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketMaximumPacketSizePropertyHavingFirstByte,
} from '../../../built-in/39-mqtt-packet-maximum-packet-size-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-maximum-packet-size-property-having-first-byte';
import {
  MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE,
} from '../../../built-in/40-mqtt-packet-wildcard-subscription-available-property/constants/mqtt-packet-wildcard-subscription-available-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketWildcardSubscriptionAvailablePropertyHavingFirstByte,
} from '../../../built-in/40-mqtt-packet-wildcard-subscription-available-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-wildcard-subscription-available-property-having-first-byte';
import {
  MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_CODE,
} from '../../../built-in/41-mqtt-packet-subscription-identifiers-available-property/constants/mqtt-packet-subscription-identifiers-available-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketSubscriptionIdentifiersAvailablePropertyHavingFirstByte,
} from '../../../built-in/41-mqtt-packet-subscription-identifiers-available-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-subscription-identifiers-available-property-having-first-byte';
import {
  MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE,
} from '../../../built-in/42-mqtt-packet-shared-subscription-available-property/constants/mqtt-packet-shared-subscription-available-property-code.constant';
import {
  createByteIteratorDecoderForMqttPacketSharedSubscriptionAvailablePropertyHavingFirstByte,
} from '../../../built-in/42-mqtt-packet-shared-subscription-available-property/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-shared-subscription-available-property-having-first-byte';
import { IGenericReadonlyMqttPacketProperty } from '../../readonly-mqtt-packet-property.type';

export function* createByteIteratorDecoderForReadonlyMqttPacketProperty(): IByteIteratorDecoder<IGenericReadonlyMqttPacketProperty> {
  const code: number = yield;

  switch (code) {
    case MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_CODE: // 01
      return (yield* createByteIteratorDecoderForMqttPacketPayloadFormatIndicatorPropertyHavingFirstByte(code));
    case MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_CODE: // 02
      return (yield* createByteIteratorDecoderForMqttPacketMessageExpiryIntervalPropertyHavingFirstByte(code));
    case MQTT_PACKET_CONTENT_TYPE_PROPERTY_CODE: // 03
      return (yield* createByteIteratorDecoderForMqttPacketContentTypePropertyHavingFirstByte(code));
    case MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_CODE: // 08
      return (yield* createByteIteratorDecoderForMqttPacketResponseTopicPropertyHavingFirstByte(code));
    case MQTT_PACKET_CORRELATION_DATA_PROPERTY_CODE: // 09
      return (yield* createByteIteratorDecoderForMqttPacketCorrelationDataPropertyHavingFirstByte(code));
    case MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_CODE: // 11
      return (yield* createByteIteratorDecoderForMqttPacketSubscriptionIdentifierPropertyHavingFirstByte(code));
    case MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_CODE: // 17
      return (yield* createByteIteratorDecoderForMqttPacketSessionExpiryIntervalPropertyHavingFirstByte(code));
    case MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_CODE: // 18
      return (yield* createByteIteratorDecoderForMqttPacketAssignedClientIdentifierPropertyHavingFirstByte(code));
    case MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_CODE: // 19
      return (yield* createByteIteratorDecoderForMqttPacketServerKeepAlivePropertyHavingFirstByte(code));
    case MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_CODE: // 21
      return (yield* createByteIteratorDecoderForMqttPacketAuthenticationMethodPropertyHavingFirstByte(code));
    case MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_CODE: // 22
      return (yield* createByteIteratorDecoderForMqttPacketAuthenticationDataPropertyHavingFirstByte(code));
    case MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_CODE: // 23
      return (yield* createByteIteratorDecoderForMqttPacketRequestProblemInformationPropertyHavingFirstByte(code));
    case MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_CODE: // 24
      return (yield* createByteIteratorDecoderForMqttPacketWillDelayIntervalPropertyHavingFirstByte(code));
    case MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_CODE: // 25
      return (yield* createByteIteratorDecoderForMqttPacketRequestResponseInformationPropertyHavingFirstByte(code));
    case MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_CODE: // 26
      return (yield* createByteIteratorDecoderForMqttPacketResponseInformationPropertyHavingFirstByte(code));
    case MQTT_PACKET_SERVER_REFERENCE_PROPERTY_CODE: // 28
      return (yield* createByteIteratorDecoderForMqttPacketServerReferencePropertyHavingFirstByte(code));
    case MQTT_PACKET_REASON_STRING_PROPERTY_CODE: // 31
      return (yield* createByteIteratorDecoderForMqttPacketReasonStringPropertyHavingFirstByte(code));
    case MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_CODE: // 33
      return (yield* createByteIteratorDecoderForMqttPacketReceiveMaximumPropertyHavingFirstByte(code));
    case MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_CODE: // 34
      return (yield* createByteIteratorDecoderForMqttPacketTopicAliasMaximumPropertyHavingFirstByte(code));
    case MQTT_PACKET_TOPIC_ALIAS_PROPERTY_CODE: // 35
      return (yield* createByteIteratorDecoderForMqttPacketTopicAliasPropertyHavingFirstByte(code));
    case MQTT_PACKET_MAXIMUM_QOS_PROPERTY_CODE: // 36
      return (yield* createByteIteratorDecoderForMqttPacketMaximumQoSPropertyHavingFirstByte(code));
    case MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_CODE: // 37
      return (yield* createByteIteratorDecoderForMqttPacketRetainAvailablePropertyHavingFirstByte(code));
    case MQTT_PACKET_USER_PROPERTY_CODE: // 38
      return (yield* createByteIteratorDecoderForMqttPacketUserPropertyHavingFirstByte(code));
    case MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_CODE: // 39
      return (yield* createByteIteratorDecoderForMqttPacketMaximumPacketSizePropertyHavingFirstByte(code));
    case MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE: // 40
      return (yield* createByteIteratorDecoderForMqttPacketWildcardSubscriptionAvailablePropertyHavingFirstByte(code));
    case MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_CODE: // 41
      return (yield* createByteIteratorDecoderForMqttPacketSubscriptionIdentifiersAvailablePropertyHavingFirstByte(code));
    case MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE: // 42
      return (yield* createByteIteratorDecoderForMqttPacketSharedSubscriptionAvailablePropertyHavingFirstByte(code));
    default:
      throw new Error(`Unsupported property: ${code}`);
  }
}

