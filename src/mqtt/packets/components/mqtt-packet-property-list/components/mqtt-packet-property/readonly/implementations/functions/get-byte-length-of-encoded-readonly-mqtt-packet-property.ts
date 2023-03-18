import {
  MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_CODE,
} from '../../../built-in/01-mqtt-packet-payload-format-indicator-property/constants/mqtt-packet-payload-format-indicator-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketPayloadFormatIndicatorProperty,
} from '../../../built-in/01-mqtt-packet-payload-format-indicator-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-payload-format-indicator-property';
import {
  MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_CODE,
} from '../../../built-in/02-mqtt-packet-message-expiry-interval-property/constants/mqtt-packet-message-expiry-interval-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketMessageExpiryIntervalProperty,
} from '../../../built-in/02-mqtt-packet-message-expiry-interval-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-message-expiry-interval-property';
import {
  MQTT_PACKET_CONTENT_TYPE_PROPERTY_CODE,
} from '../../../built-in/03-mqtt-packet-content-type-property/constants/mqtt-packet-content-type-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketContentTypeProperty,
} from '../../../built-in/03-mqtt-packet-content-type-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-content-type-property';
import {
  MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_CODE,
} from '../../../built-in/08-mqtt-packet-response-topic-property/constants/mqtt-packet-response-topic-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketResponseTopicProperty,
} from '../../../built-in/08-mqtt-packet-response-topic-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-response-topic-property';
import {
  MQTT_PACKET_CORRELATION_DATA_PROPERTY_CODE,
} from '../../../built-in/09-mqtt-packet-correlation-data-property/constants/mqtt-packet-correlation-data-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketCorrelationDataProperty,
} from '../../../built-in/09-mqtt-packet-correlation-data-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-correlation-data-property';
import {
  MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_CODE,
} from '../../../built-in/11-mqtt-packet-subscription-identifier-property/constants/mqtt-packet-subscription-identifier-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketSubscriptionIdentifierProperty,
} from '../../../built-in/11-mqtt-packet-subscription-identifier-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-subscription-identifier-property';
import {
  MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_CODE,
} from '../../../built-in/17-mqtt-packet-session-expiry-interval-property/constants/mqtt-packet-session-expiry-interval-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketSessionExpiryIntervalProperty,
} from '../../../built-in/17-mqtt-packet-session-expiry-interval-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-session-expiry-interval-property';
import {
  MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_CODE,
} from '../../../built-in/18-mqtt-packet-assigned-client-identifier-property/constants/mqtt-packet-assigned-client-identifier-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketAssignedClientIdentifierProperty,
} from '../../../built-in/18-mqtt-packet-assigned-client-identifier-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-assigned-client-identifier-property';
import {
  MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_CODE,
} from '../../../built-in/19-mqtt-packet-server-keep-alive-property/constants/mqtt-packet-server-keep-alive-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketServerKeepAliveProperty,
} from '../../../built-in/19-mqtt-packet-server-keep-alive-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-server-keep-alive-property';
import {
  MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_CODE,
} from '../../../built-in/21-mqtt-packet-authentication-method-property/constants/mqtt-packet-authentication-method-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketAuthenticationMethodProperty,
} from '../../../built-in/21-mqtt-packet-authentication-method-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-authentication-method-property';
import {
  MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_CODE,
} from '../../../built-in/22-mqtt-packet-authentication-data-property/constants/mqtt-packet-authentication-data-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketAuthenticationDataProperty,
} from '../../../built-in/22-mqtt-packet-authentication-data-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-authentication-data-property';
import {
  MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_CODE,
} from '../../../built-in/23-mqtt-packet-request-problem-information-property/constants/mqtt-packet-request-problem-information-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketRequestProblemInformationProperty,
} from '../../../built-in/23-mqtt-packet-request-problem-information-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-request-problem-information-property';
import {
  MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_CODE,
} from '../../../built-in/24-mqtt-packet-will-delay-interval-property/constants/mqtt-packet-will-delay-interval-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketWillDelayIntervalProperty,
} from '../../../built-in/24-mqtt-packet-will-delay-interval-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-will-delay-interval-property';
import {
  MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_CODE,
} from '../../../built-in/25-mqtt-packet-request-response-information-property/constants/mqtt-packet-request-response-information-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketRequestResponseInformationProperty,
} from '../../../built-in/25-mqtt-packet-request-response-information-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-request-response-information-property';
import {
  MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_CODE,
} from '../../../built-in/26-mqtt-packet-response-information-property/constants/mqtt-packet-response-information-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketResponseInformationProperty,
} from '../../../built-in/26-mqtt-packet-response-information-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-response-information-property';
import {
  MQTT_PACKET_SERVER_REFERENCE_PROPERTY_CODE,
} from '../../../built-in/28-mqtt-packet-server-reference-property/constants/mqtt-packet-server-reference-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketServerReferenceProperty,
} from '../../../built-in/28-mqtt-packet-server-reference-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-server-reference-property';
import {
  MQTT_PACKET_REASON_STRING_PROPERTY_CODE,
} from '../../../built-in/31-mqtt-packet-reason-string-property/constants/mqtt-packet-reason-string-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketReasonStringProperty,
} from '../../../built-in/31-mqtt-packet-reason-string-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-reason-string-property';
import {
  MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_CODE,
} from '../../../built-in/33-mqtt-packet-receive-maximum-property/constants/mqtt-packet-receive-maximum-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketReceiveMaximumProperty,
} from '../../../built-in/33-mqtt-packet-receive-maximum-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-receive-maximum-property';
import {
  MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_CODE,
} from '../../../built-in/34-mqtt-packet-topic-alias-maximum-property/constants/mqtt-packet-topic-alias-maximum-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketTopicAliasMaximumProperty,
} from '../../../built-in/34-mqtt-packet-topic-alias-maximum-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-topic-alias-maximum-property';
import {
  MQTT_PACKET_TOPIC_ALIAS_PROPERTY_CODE,
} from '../../../built-in/35-mqtt-packet-topic-alias-property/constants/mqtt-packet-topic-alias-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketTopicAliasProperty,
} from '../../../built-in/35-mqtt-packet-topic-alias-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-topic-alias-property';
import {
  MQTT_PACKET_MAXIMUM_QOS_PROPERTY_CODE,
} from '../../../built-in/36-mqtt-packet-maximum-qos-property/constants/mqtt-packet-maximum-qos-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketMaximumQoSProperty,
} from '../../../built-in/36-mqtt-packet-maximum-qos-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-maximum-qos-property';
import {
  MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_CODE,
} from '../../../built-in/37-mqtt-packet-retain-available-property/constants/mqtt-packet-retain-available-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketRetainAvailableProperty,
} from '../../../built-in/37-mqtt-packet-retain-available-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-retain-available-property';
import {
  MQTT_PACKET_USER_PROPERTY_CODE,
} from '../../../built-in/38-mqtt-packet-user-property-property/constants/mqtt-packet-user-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketUserProperty,
} from '../../../built-in/38-mqtt-packet-user-property-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-user-property';
import {
  MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_CODE,
} from '../../../built-in/39-mqtt-packet-maximum-packet-size-property/constants/mqtt-packet-maximum-packet-size-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketMaximumPacketSizeProperty,
} from '../../../built-in/39-mqtt-packet-maximum-packet-size-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-maximum-packet-size-property';
import {
  MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE,
} from '../../../built-in/40-mqtt-packet-wildcard-subscription-available-property/constants/mqtt-packet-wildcard-subscription-available-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketWildcardSubscriptionAvailableProperty,
} from '../../../built-in/40-mqtt-packet-wildcard-subscription-available-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-wildcard-subscription-available-property';
import {
  MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_CODE,
} from '../../../built-in/41-mqtt-packet-subscription-identifiers-available-property/constants/mqtt-packet-subscription-identifiers-available-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketSubscriptionIdentifiersAvailableProperty,
} from '../../../built-in/41-mqtt-packet-subscription-identifiers-available-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-subscription-identifiers-available-property';
import {
  MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE,
} from '../../../built-in/42-mqtt-packet-shared-subscription-available-property/constants/mqtt-packet-shared-subscription-available-property-code.constant';
import {
  getByteLengthOfEncodedMqttPacketSharedSubscriptionAvailableProperty,
} from '../../../built-in/42-mqtt-packet-shared-subscription-available-property/implementations/functions/get-byte-length-of-encoded-mqtt-packet-shared-subscription-available-property';
import { IGenericReadonlyMqttPacketProperty } from '../../readonly-mqtt-packet-property.type';

export function getByteLengthOfEncodedReadonlyMqttPacketProperty(
  input: IGenericReadonlyMqttPacketProperty,
): number {
  switch (input.getCode()) {
    case MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_CODE: // 01
      return getByteLengthOfEncodedMqttPacketPayloadFormatIndicatorProperty(input);
    case MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_CODE:  // 02
      return getByteLengthOfEncodedMqttPacketMessageExpiryIntervalProperty(input);
    case MQTT_PACKET_CONTENT_TYPE_PROPERTY_CODE: // 03
      return getByteLengthOfEncodedMqttPacketContentTypeProperty(input);
    case MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_CODE: // 08
      return getByteLengthOfEncodedMqttPacketResponseTopicProperty(input);
    case MQTT_PACKET_CORRELATION_DATA_PROPERTY_CODE: // 09
      return getByteLengthOfEncodedMqttPacketCorrelationDataProperty(input);
    case MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_CODE: // 11
      return getByteLengthOfEncodedMqttPacketSubscriptionIdentifierProperty(input);
    case MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_CODE: // 17
      return getByteLengthOfEncodedMqttPacketSessionExpiryIntervalProperty(input);
    case MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_CODE: // 18
      return getByteLengthOfEncodedMqttPacketAssignedClientIdentifierProperty(input);
    case MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_CODE: // 19
      return getByteLengthOfEncodedMqttPacketServerKeepAliveProperty(input);
    case MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_CODE: // 21
      return getByteLengthOfEncodedMqttPacketAuthenticationMethodProperty(input);
    case MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_CODE: // 22
      return getByteLengthOfEncodedMqttPacketAuthenticationDataProperty(input);
    case MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_CODE: // 23
      return getByteLengthOfEncodedMqttPacketRequestProblemInformationProperty(input);
    case MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_CODE: // 24
      return getByteLengthOfEncodedMqttPacketWillDelayIntervalProperty(input);
    case MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_CODE: // 25
      return getByteLengthOfEncodedMqttPacketRequestResponseInformationProperty(input);
    case MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_CODE: // 26
      return getByteLengthOfEncodedMqttPacketResponseInformationProperty(input);
    case MQTT_PACKET_SERVER_REFERENCE_PROPERTY_CODE: // 28
      return getByteLengthOfEncodedMqttPacketServerReferenceProperty(input);
    case MQTT_PACKET_REASON_STRING_PROPERTY_CODE:  // 31
      return getByteLengthOfEncodedMqttPacketReasonStringProperty(input);
    case MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_CODE: // 33
      return getByteLengthOfEncodedMqttPacketReceiveMaximumProperty(input);
    case MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_CODE: // 34
      return getByteLengthOfEncodedMqttPacketTopicAliasMaximumProperty(input);
    case MQTT_PACKET_TOPIC_ALIAS_PROPERTY_CODE: // 35
      return getByteLengthOfEncodedMqttPacketTopicAliasProperty(input);
    case MQTT_PACKET_MAXIMUM_QOS_PROPERTY_CODE: // 36
      return getByteLengthOfEncodedMqttPacketMaximumQoSProperty(input);
    case MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_CODE: // 37
      return getByteLengthOfEncodedMqttPacketRetainAvailableProperty(input);
    case MQTT_PACKET_USER_PROPERTY_CODE: // 38
      return getByteLengthOfEncodedMqttPacketUserProperty(input);
    case MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_CODE: // 39
      return getByteLengthOfEncodedMqttPacketMaximumPacketSizeProperty(input);
    case MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE: // 40
      return getByteLengthOfEncodedMqttPacketWildcardSubscriptionAvailableProperty(input);
    case MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_CODE: // 41
      return getByteLengthOfEncodedMqttPacketSubscriptionIdentifiersAvailableProperty(input);
    case MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE: // 42
      return getByteLengthOfEncodedMqttPacketSharedSubscriptionAvailableProperty(input);
    default:
      throw new Error(`Unsupported property: ${input.getName()}`);
  }
}
