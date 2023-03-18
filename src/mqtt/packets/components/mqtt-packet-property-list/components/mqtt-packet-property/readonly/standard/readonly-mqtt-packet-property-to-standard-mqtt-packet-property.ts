import {
  MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_CODE,
} from '../../built-in/01-mqtt-packet-payload-format-indicator-property/constants/mqtt-packet-payload-format-indicator-property-code.constant';
import {
  mqttPacketPayloadFormatIndicatorPropertyToStandardMqttPacketPayloadFormatIndicatorProperty,
} from '../../built-in/01-mqtt-packet-payload-format-indicator-property/standard/mqtt-packet-payload-format-indicator-property-to-standard-mqtt-packet-payload-format-indicator-property';
import {
  MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_CODE,
} from '../../built-in/02-mqtt-packet-message-expiry-interval-property/constants/mqtt-packet-message-expiry-interval-property-code.constant';
import {
  mqttPacketMessageExpiryIntervalPropertyToStandardMqttPacketMessageExpiryIntervalProperty,
} from '../../built-in/02-mqtt-packet-message-expiry-interval-property/standard/mqtt-packet-message-expiry-interval-property-to-standard-mqtt-packet-message-expiry-interval-property';
import {
  MQTT_PACKET_CONTENT_TYPE_PROPERTY_CODE,
} from '../../built-in/03-mqtt-packet-content-type-property/constants/mqtt-packet-content-type-property-code.constant';
import {
  mqttPacketContentTypePropertyToStandardMqttPacketContentTypeProperty,
} from '../../built-in/03-mqtt-packet-content-type-property/standard/mqtt-packet-content-type-property-to-standard-mqtt-packet-content-type-property';
import {
  MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_CODE,
} from '../../built-in/08-mqtt-packet-response-topic-property/constants/mqtt-packet-response-topic-property-code.constant';
import {
  mqttPacketResponseTopicPropertyToStandardMqttPacketResponseTopicProperty,
} from '../../built-in/08-mqtt-packet-response-topic-property/standard/mqtt-packet-response-topic-property-to-standard-mqtt-packet-response-topic-property';
import {
  MQTT_PACKET_CORRELATION_DATA_PROPERTY_CODE,
} from '../../built-in/09-mqtt-packet-correlation-data-property/constants/mqtt-packet-correlation-data-property-code.constant';
import {
  mqttPacketCorrelationDataPropertyToStandardMqttPacketCorrelationDataProperty,
} from '../../built-in/09-mqtt-packet-correlation-data-property/standard/mqtt-packet-correlation-data-property-to-standard-mqtt-packet-correlation-data-property';
import {
  MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_CODE,
} from '../../built-in/11-mqtt-packet-subscription-identifier-property/constants/mqtt-packet-subscription-identifier-property-code.constant';
import {
  mqttPacketSubscriptionIdentifierPropertyToStandardMqttPacketSubscriptionIdentifierProperty,
} from '../../built-in/11-mqtt-packet-subscription-identifier-property/standard/mqtt-packet-subscription-identifier-property-to-standard-mqtt-packet-subscription-identifier-property';
import {
  MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_CODE,
} from '../../built-in/17-mqtt-packet-session-expiry-interval-property/constants/mqtt-packet-session-expiry-interval-property-code.constant';
import {
  mqttPacketSessionExpiryIntervalPropertyToStandardMqttPacketSessionExpiryIntervalProperty,
} from '../../built-in/17-mqtt-packet-session-expiry-interval-property/standard/mqtt-packet-session-expiry-interval-property-to-standard-mqtt-packet-session-expiry-interval-property';
import {
  MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_CODE,
} from '../../built-in/18-mqtt-packet-assigned-client-identifier-property/constants/mqtt-packet-assigned-client-identifier-property-code.constant';
import {
  mqttPacketAssignedClientIdentifierPropertyToStandardMqttPacketAssignedClientIdentifierProperty,
} from '../../built-in/18-mqtt-packet-assigned-client-identifier-property/standard/mqtt-packet-assigned-client-identifier-property-to-standard-mqtt-packet-assigned-client-identifier-property';
import {
  MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_CODE,
} from '../../built-in/19-mqtt-packet-server-keep-alive-property/constants/mqtt-packet-server-keep-alive-property-code.constant';
import {
  mqttPacketServerKeepAlivePropertyToStandardMqttPacketServerKeepAliveProperty,
} from '../../built-in/19-mqtt-packet-server-keep-alive-property/standard/mqtt-packet-server-keep-alive-property-to-standard-mqtt-packet-server-keep-alive-property';
import {
  MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_CODE,
} from '../../built-in/21-mqtt-packet-authentication-method-property/constants/mqtt-packet-authentication-method-property-code.constant';
import {
  mqttPacketAuthenticationMethodPropertyToStandardMqttPacketAuthenticationMethodProperty,
} from '../../built-in/21-mqtt-packet-authentication-method-property/standard/mqtt-packet-authentication-method-property-to-standard-mqtt-packet-authentication-method-property';
import {
  MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_CODE,
} from '../../built-in/22-mqtt-packet-authentication-data-property/constants/mqtt-packet-authentication-data-property-code.constant';
import {
  mqttPacketAuthenticationDataPropertyToStandardMqttPacketAuthenticationDataProperty,
} from '../../built-in/22-mqtt-packet-authentication-data-property/standard/mqtt-packet-authentication-data-property-to-standard-mqtt-packet-authentication-data-property';
import {
  MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_CODE,
} from '../../built-in/23-mqtt-packet-request-problem-information-property/constants/mqtt-packet-request-problem-information-property-code.constant';
import {
  mqttPacketRequestProblemInformationPropertyToStandardMqttPacketRequestProblemInformationProperty,
} from '../../built-in/23-mqtt-packet-request-problem-information-property/standard/mqtt-packet-request-problem-information-property-to-standard-mqtt-packet-request-problem-information-property';
import {
  MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_CODE,
} from '../../built-in/24-mqtt-packet-will-delay-interval-property/constants/mqtt-packet-will-delay-interval-property-code.constant';
import {
  mqttPacketWillDelayIntervalPropertyToStandardMqttPacketWillDelayIntervalProperty,
} from '../../built-in/24-mqtt-packet-will-delay-interval-property/standard/mqtt-packet-will-delay-interval-property-to-standard-mqtt-packet-will-delay-interval-property';
import {
  MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_CODE,
} from '../../built-in/25-mqtt-packet-request-response-information-property/constants/mqtt-packet-request-response-information-property-code.constant';
import {
  mqttPacketRequestResponseInformationPropertyToStandardMqttPacketRequestResponseInformationProperty,
} from '../../built-in/25-mqtt-packet-request-response-information-property/standard/mqtt-packet-request-response-information-property-to-standard-mqtt-packet-request-response-information-property';
import {
  MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_CODE,
} from '../../built-in/26-mqtt-packet-response-information-property/constants/mqtt-packet-response-information-property-code.constant';
import {
  mqttPacketResponseInformationPropertyToStandardMqttPacketResponseInformationProperty,
} from '../../built-in/26-mqtt-packet-response-information-property/standard/mqtt-packet-response-information-property-to-standard-mqtt-packet-response-information-property';
import {
  MQTT_PACKET_SERVER_REFERENCE_PROPERTY_CODE,
} from '../../built-in/28-mqtt-packet-server-reference-property/constants/mqtt-packet-server-reference-property-code.constant';
import {
  mqttPacketServerReferencePropertyToStandardMqttPacketServerReferenceProperty,
} from '../../built-in/28-mqtt-packet-server-reference-property/standard/mqtt-packet-server-reference-property-to-standard-mqtt-packet-server-reference-property';
import {
  MQTT_PACKET_REASON_STRING_PROPERTY_CODE,
} from '../../built-in/31-mqtt-packet-reason-string-property/constants/mqtt-packet-reason-string-property-code.constant';
import {
  mqttPacketReasonStringPropertyToStandardMqttPacketReasonStringProperty,
} from '../../built-in/31-mqtt-packet-reason-string-property/standard/mqtt-packet-reason-string-property-to-standard-mqtt-packet-reason-string-property';
import {
  MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_CODE,
} from '../../built-in/33-mqtt-packet-receive-maximum-property/constants/mqtt-packet-receive-maximum-property-code.constant';
import {
  mqttPacketReceiveMaximumPropertyToStandardMqttPacketReceiveMaximumProperty,
} from '../../built-in/33-mqtt-packet-receive-maximum-property/standard/mqtt-packet-receive-maximum-property-to-standard-mqtt-packet-receive-maximum-property';
import {
  MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_CODE,
} from '../../built-in/34-mqtt-packet-topic-alias-maximum-property/constants/mqtt-packet-topic-alias-maximum-property-code.constant';
import {
  mqttPacketTopicAliasMaximumPropertyToStandardMqttPacketTopicAliasMaximumProperty,
} from '../../built-in/34-mqtt-packet-topic-alias-maximum-property/standard/mqtt-packet-topic-alias-maximum-property-to-standard-mqtt-packet-topic-alias-maximum-property';
import {
  MQTT_PACKET_TOPIC_ALIAS_PROPERTY_CODE,
} from '../../built-in/35-mqtt-packet-topic-alias-property/constants/mqtt-packet-topic-alias-property-code.constant';
import {
  mqttPacketTopicAliasPropertyToStandardMqttPacketTopicAliasProperty,
} from '../../built-in/35-mqtt-packet-topic-alias-property/standard/mqtt-packet-topic-alias-property-to-standard-mqtt-packet-topic-alias-property';
import {
  MQTT_PACKET_MAXIMUM_QOS_PROPERTY_CODE,
} from '../../built-in/36-mqtt-packet-maximum-qos-property/constants/mqtt-packet-maximum-qos-property-code.constant';
import {
  mqttPacketMaximumQoSPropertyToStandardMqttPacketMaximumQoSProperty,
} from '../../built-in/36-mqtt-packet-maximum-qos-property/standard/mqtt-packet-maximum-qos-property-to-standard-mqtt-packet-maximum-qos-property';
import {
  MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_CODE,
} from '../../built-in/37-mqtt-packet-retain-available-property/constants/mqtt-packet-retain-available-property-code.constant';
import {
  mqttPacketRetainAvailablePropertyToStandardMqttPacketRetainAvailableProperty,
} from '../../built-in/37-mqtt-packet-retain-available-property/standard/mqtt-packet-retain-available-property-to-standard-mqtt-packet-retain-available-property';
import {
  MQTT_PACKET_USER_PROPERTY_CODE,
} from '../../built-in/38-mqtt-packet-user-property-property/constants/mqtt-packet-user-property-code.constant';
import {
  mqttPacketUserPropertyToStandardMqttPacketUserProperties,
} from '../../built-in/38-mqtt-packet-user-property-property/standard/mqtt-packet-user-property-to-standard-mqtt-packet-user-properties';
import {
  MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_CODE,
} from '../../built-in/39-mqtt-packet-maximum-packet-size-property/constants/mqtt-packet-maximum-packet-size-property-code.constant';
import {
  mqttPacketMaximumPacketSizePropertyToStandardMqttPacketMaximumPacketSizeProperty,
} from '../../built-in/39-mqtt-packet-maximum-packet-size-property/standard/mqtt-packet-maximum-packet-size-property-to-standard-mqtt-packet-maximum-packet-size-property';
import {
  MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE,
} from '../../built-in/40-mqtt-packet-wildcard-subscription-available-property/constants/mqtt-packet-wildcard-subscription-available-property-code.constant';
import {
  mqttPacketWildcardSubscriptionAvailablePropertyToStandardMqttPacketWildcardSubscriptionAvailableProperty,
} from '../../built-in/40-mqtt-packet-wildcard-subscription-available-property/standard/mqtt-packet-wildcard-subscription-available-property-to-standard-mqtt-packet-wildcard-subscription-available-property';
import {
  MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_CODE,
} from '../../built-in/41-mqtt-packet-subscription-identifiers-available-property/constants/mqtt-packet-subscription-identifiers-available-property-code.constant';
import {
  mqttPacketSubscriptionIdentifiersAvailablePropertyToStandardMqttPacketSubscriptionIdentifiersAvailableProperty,
} from '../../built-in/41-mqtt-packet-subscription-identifiers-available-property/standard/mqtt-packet-subscription-identifiers-available-property-to-standard-mqtt-packet-subscription-identifiers-available-property';
import {
  MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE,
} from '../../built-in/42-mqtt-packet-shared-subscription-available-property/constants/mqtt-packet-shared-subscription-available-property-code.constant';
import {
  mqttPacketSharedSubscriptionAvailablePropertyToStandardMqttPacketSharedSubscriptionAvailableProperty,
} from '../../built-in/42-mqtt-packet-shared-subscription-available-property/standard/mqtt-packet-shared-subscription-available-property-to-standard-mqtt-packet-shared-subscription-available-property';
import { IGenericReadonlyMqttPacketProperty } from '../readonly-mqtt-packet-property.type';
import { IGenericStandardMqttPacketProperty } from './standard-mqtt-packet-property.type';

export function readonlyMqttPacketPropertyToStandardMqttPacketProperty(
  input: IGenericReadonlyMqttPacketProperty,
): IGenericStandardMqttPacketProperty {
  switch (input.getCode()) {
    // TODO
    case MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_CODE: // 01
      return mqttPacketPayloadFormatIndicatorPropertyToStandardMqttPacketPayloadFormatIndicatorProperty(input);
    case MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_CODE:  // 02
      return mqttPacketMessageExpiryIntervalPropertyToStandardMqttPacketMessageExpiryIntervalProperty(input);
    case MQTT_PACKET_CONTENT_TYPE_PROPERTY_CODE: // 03
      return mqttPacketContentTypePropertyToStandardMqttPacketContentTypeProperty(input);
    case MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_CODE: // 08
      return mqttPacketResponseTopicPropertyToStandardMqttPacketResponseTopicProperty(input);
    case MQTT_PACKET_CORRELATION_DATA_PROPERTY_CODE: // 09
      return mqttPacketCorrelationDataPropertyToStandardMqttPacketCorrelationDataProperty(input);
    case MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_CODE: // 11
      return mqttPacketSubscriptionIdentifierPropertyToStandardMqttPacketSubscriptionIdentifierProperty(input);
    case MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_CODE: // 17
      return mqttPacketSessionExpiryIntervalPropertyToStandardMqttPacketSessionExpiryIntervalProperty(input);
    case MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_CODE: // 18
      return mqttPacketAssignedClientIdentifierPropertyToStandardMqttPacketAssignedClientIdentifierProperty(input);
    case MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_CODE: // 19
      return mqttPacketServerKeepAlivePropertyToStandardMqttPacketServerKeepAliveProperty(input);
    case MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_CODE: // 21
      return mqttPacketAuthenticationMethodPropertyToStandardMqttPacketAuthenticationMethodProperty(input);
    case MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_CODE: // 22
      return mqttPacketAuthenticationDataPropertyToStandardMqttPacketAuthenticationDataProperty(input);
    case MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_CODE: // 23
      return mqttPacketRequestProblemInformationPropertyToStandardMqttPacketRequestProblemInformationProperty(input);
    case MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_CODE: // 24
      return mqttPacketWillDelayIntervalPropertyToStandardMqttPacketWillDelayIntervalProperty(input);
    case MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_CODE: // 25
      return mqttPacketRequestResponseInformationPropertyToStandardMqttPacketRequestResponseInformationProperty(input);
    case MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_CODE: // 26
      return mqttPacketResponseInformationPropertyToStandardMqttPacketResponseInformationProperty(input);
    case MQTT_PACKET_SERVER_REFERENCE_PROPERTY_CODE: // 28
      return mqttPacketServerReferencePropertyToStandardMqttPacketServerReferenceProperty(input);
    case MQTT_PACKET_REASON_STRING_PROPERTY_CODE:  // 31
      return mqttPacketReasonStringPropertyToStandardMqttPacketReasonStringProperty(input);
    case MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_CODE: // 33
      return mqttPacketReceiveMaximumPropertyToStandardMqttPacketReceiveMaximumProperty(input);
    case MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_CODE: // 34
      return mqttPacketTopicAliasMaximumPropertyToStandardMqttPacketTopicAliasMaximumProperty(input);
    case MQTT_PACKET_TOPIC_ALIAS_PROPERTY_CODE: // 35
      return mqttPacketTopicAliasPropertyToStandardMqttPacketTopicAliasProperty(input);
    case MQTT_PACKET_MAXIMUM_QOS_PROPERTY_CODE: // 36
      return mqttPacketMaximumQoSPropertyToStandardMqttPacketMaximumQoSProperty(input);
    case MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_CODE: // 37
      return mqttPacketRetainAvailablePropertyToStandardMqttPacketRetainAvailableProperty(input);
    case MQTT_PACKET_USER_PROPERTY_CODE: // 38
      return mqttPacketUserPropertyToStandardMqttPacketUserProperties(input);
    case MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_CODE: // 39
      return mqttPacketMaximumPacketSizePropertyToStandardMqttPacketMaximumPacketSizeProperty(input);
    case MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE: // 40
      return mqttPacketWildcardSubscriptionAvailablePropertyToStandardMqttPacketWildcardSubscriptionAvailableProperty(input);
    case MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_CODE: // 41
      return mqttPacketSubscriptionIdentifiersAvailablePropertyToStandardMqttPacketSubscriptionIdentifiersAvailableProperty(input);
    case MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE: // 42
      return mqttPacketSharedSubscriptionAvailablePropertyToStandardMqttPacketSharedSubscriptionAvailableProperty(input);
    default:
      throw new Error(`Unsupported property: ${input.getName()}`);
  }
}
