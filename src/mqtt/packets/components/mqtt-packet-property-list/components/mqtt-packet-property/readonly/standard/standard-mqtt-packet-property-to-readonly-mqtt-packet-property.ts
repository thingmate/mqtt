import {
  MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_CODE,
} from '../../built-in/01-mqtt-packet-payload-format-indicator-property/constants/mqtt-packet-payload-format-indicator-property-code.constant';
import {
  standardMqttPacketPayloadFormatIndicatorPropertyToMqttPacketPayloadFormatIndicatorProperty,
} from '../../built-in/01-mqtt-packet-payload-format-indicator-property/standard/standard-mqtt-packet-payload-format-indicator-property-to-mqtt-packet-payload-format-indicator-property';
import {
  IStandardMqttPacketPayloadFormatIndicatorProperty,
} from '../../built-in/01-mqtt-packet-payload-format-indicator-property/standard/standard-mqtt-packet-payload-format-indicator-property.type';
import {
  MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_CODE,
} from '../../built-in/02-mqtt-packet-message-expiry-interval-property/constants/mqtt-packet-message-expiry-interval-property-code.constant';
import {
  standardMqttPacketMessageExpiryIntervalPropertyToMqttPacketMessageExpiryIntervalProperty,
} from '../../built-in/02-mqtt-packet-message-expiry-interval-property/standard/standard-mqtt-packet-message-expiry-interval-property-to-mqtt-packet-message-expiry-interval-property';
import {
  IStandardMqttPacketMessageExpiryIntervalProperty,
} from '../../built-in/02-mqtt-packet-message-expiry-interval-property/standard/standard-mqtt-packet-message-expiry-interval-property.type';
import {
  MQTT_PACKET_CONTENT_TYPE_PROPERTY_CODE,
} from '../../built-in/03-mqtt-packet-content-type-property/constants/mqtt-packet-content-type-property-code.constant';
import {
  standardMqttPacketContentTypePropertyToMqttPacketContentTypeProperty,
} from '../../built-in/03-mqtt-packet-content-type-property/standard/standard-mqtt-packet-content-type-property-to-mqtt-packet-content-type-property';
import {
  IStandardMqttPacketContentTypeProperty,
} from '../../built-in/03-mqtt-packet-content-type-property/standard/standard-mqtt-packet-content-type-property.type';
import {
  MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_CODE,
} from '../../built-in/08-mqtt-packet-response-topic-property/constants/mqtt-packet-response-topic-property-code.constant';
import {
  standardMqttPacketResponseTopicPropertyToMqttPacketResponseTopicProperty,
} from '../../built-in/08-mqtt-packet-response-topic-property/standard/standard-mqtt-packet-response-topic-property-to-mqtt-packet-response-topic-property';
import {
  IStandardMqttPacketResponseTopicProperty,
} from '../../built-in/08-mqtt-packet-response-topic-property/standard/standard-mqtt-packet-response-topic-property.type';
import {
  MQTT_PACKET_CORRELATION_DATA_PROPERTY_CODE,
} from '../../built-in/09-mqtt-packet-correlation-data-property/constants/mqtt-packet-correlation-data-property-code.constant';
import {
  standardMqttPacketCorrelationDataPropertyToMqttPacketCorrelationDataProperty,
} from '../../built-in/09-mqtt-packet-correlation-data-property/standard/standard-mqtt-packet-correlation-data-property-to-mqtt-packet-correlation-data-property';
import {
  IStandardMqttPacketCorrelationDataProperty,
} from '../../built-in/09-mqtt-packet-correlation-data-property/standard/standard-mqtt-packet-correlation-data-property.type';
import {
  MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_CODE,
} from '../../built-in/11-mqtt-packet-subscription-identifier-property/constants/mqtt-packet-subscription-identifier-property-code.constant';
import {
  standardMqttPacketSubscriptionIdentifierPropertyToMqttPacketSubscriptionIdentifierProperty,
} from '../../built-in/11-mqtt-packet-subscription-identifier-property/standard/standard-mqtt-packet-subscription-identifier-property-to-mqtt-packet-subscription-identifier-property';
import {
  IStandardMqttPacketSubscriptionIdentifierProperty,
} from '../../built-in/11-mqtt-packet-subscription-identifier-property/standard/standard-mqtt-packet-subscription-identifier-property.type';
import {
  MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_CODE,
} from '../../built-in/17-mqtt-packet-session-expiry-interval-property/constants/mqtt-packet-session-expiry-interval-property-code.constant';
import {
  standardMqttPacketSessionExpiryIntervalPropertyToMqttPacketSessionExpiryIntervalProperty,
} from '../../built-in/17-mqtt-packet-session-expiry-interval-property/standard/standard-mqtt-packet-session-expiry-interval-property-to-mqtt-packet-session-expiry-interval-property';
import {
  IStandardMqttPacketSessionExpiryIntervalProperty,
} from '../../built-in/17-mqtt-packet-session-expiry-interval-property/standard/standard-mqtt-packet-session-expiry-interval-property.type';
import {
  MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_CODE,
} from '../../built-in/18-mqtt-packet-assigned-client-identifier-property/constants/mqtt-packet-assigned-client-identifier-property-code.constant';
import {
  standardMqttPacketAssignedClientIdentifierPropertyToMqttPacketAssignedClientIdentifierProperty,
} from '../../built-in/18-mqtt-packet-assigned-client-identifier-property/standard/standard-mqtt-packet-assigned-client-identifier-property-to-mqtt-packet-assigned-client-identifier-property';
import {
  IStandardMqttPacketAssignedClientIdentifierProperty,
} from '../../built-in/18-mqtt-packet-assigned-client-identifier-property/standard/standard-mqtt-packet-assigned-client-identifier-property.type';
import {
  MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_CODE,
} from '../../built-in/19-mqtt-packet-server-keep-alive-property/constants/mqtt-packet-server-keep-alive-property-code.constant';
import {
  standardMqttPacketServerKeepAlivePropertyToMqttPacketServerKeepAliveProperty,
} from '../../built-in/19-mqtt-packet-server-keep-alive-property/standard/standard-mqtt-packet-server-keep-alive-property-to-mqtt-packet-server-keep-alive-property';
import {
  IStandardMqttPacketServerKeepAliveProperty,
} from '../../built-in/19-mqtt-packet-server-keep-alive-property/standard/standard-mqtt-packet-server-keep-alive-property.type';
import {
  MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_CODE,
} from '../../built-in/21-mqtt-packet-authentication-method-property/constants/mqtt-packet-authentication-method-property-code.constant';
import {
  standardMqttPacketAuthenticationMethodPropertyToMqttPacketAuthenticationMethodProperty,
} from '../../built-in/21-mqtt-packet-authentication-method-property/standard/standard-mqtt-packet-authentication-method-property-to-mqtt-packet-authentication-method-property';
import {
  IStandardMqttPacketAuthenticationMethodProperty,
} from '../../built-in/21-mqtt-packet-authentication-method-property/standard/standard-mqtt-packet-authentication-method-property.type';
import {
  MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_CODE,
} from '../../built-in/22-mqtt-packet-authentication-data-property/constants/mqtt-packet-authentication-data-property-code.constant';
import {
  standardMqttPacketAuthenticationDataPropertyToMqttPacketAuthenticationDataProperty,
} from '../../built-in/22-mqtt-packet-authentication-data-property/standard/standard-mqtt-packet-authentication-data-property-to-mqtt-packet-authentication-data-property';
import {
  IStandardMqttPacketAuthenticationDataProperty,
} from '../../built-in/22-mqtt-packet-authentication-data-property/standard/standard-mqtt-packet-authentication-data-property.type';
import {
  MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_CODE,
} from '../../built-in/23-mqtt-packet-request-problem-information-property/constants/mqtt-packet-request-problem-information-property-code.constant';
import {
  standardMqttPacketRequestProblemInformationPropertyToMqttPacketRequestProblemInformationProperty,
} from '../../built-in/23-mqtt-packet-request-problem-information-property/standard/standard-mqtt-packet-request-problem-information-property-to-mqtt-packet-request-problem-information-property';
import {
  IStandardMqttPacketRequestProblemInformationProperty,
} from '../../built-in/23-mqtt-packet-request-problem-information-property/standard/standard-mqtt-packet-request-problem-information-property.type';
import {
  MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_CODE,
} from '../../built-in/24-mqtt-packet-will-delay-interval-property/constants/mqtt-packet-will-delay-interval-property-code.constant';
import {
  standardMqttPacketWillDelayIntervalPropertyToMqttPacketWillDelayIntervalProperty,
} from '../../built-in/24-mqtt-packet-will-delay-interval-property/standard/standard-mqtt-packet-will-delay-interval-property-to-mqtt-packet-will-delay-interval-property';
import {
  IStandardMqttPacketWillDelayIntervalProperty,
} from '../../built-in/24-mqtt-packet-will-delay-interval-property/standard/standard-mqtt-packet-will-delay-interval-property.type';
import {
  MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_CODE,
} from '../../built-in/25-mqtt-packet-request-response-information-property/constants/mqtt-packet-request-response-information-property-code.constant';
import {
  standardMqttPacketRequestResponseInformationPropertyToMqttPacketRequestResponseInformationProperty,
} from '../../built-in/25-mqtt-packet-request-response-information-property/standard/standard-mqtt-packet-request-response-information-property-to-mqtt-packet-request-response-information-property';
import {
  IStandardMqttPacketRequestResponseInformationProperty,
} from '../../built-in/25-mqtt-packet-request-response-information-property/standard/standard-mqtt-packet-request-response-information-property.type';
import {
  MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_CODE,
} from '../../built-in/26-mqtt-packet-response-information-property/constants/mqtt-packet-response-information-property-code.constant';
import {
  standardMqttPacketResponseInformationPropertyToMqttPacketResponseInformationProperty,
} from '../../built-in/26-mqtt-packet-response-information-property/standard/standard-mqtt-packet-response-information-property-to-mqtt-packet-response-information-property';
import {
  IStandardMqttPacketResponseInformationProperty,
} from '../../built-in/26-mqtt-packet-response-information-property/standard/standard-mqtt-packet-response-information-property.type';
import {
  MQTT_PACKET_SERVER_REFERENCE_PROPERTY_CODE,
} from '../../built-in/28-mqtt-packet-server-reference-property/constants/mqtt-packet-server-reference-property-code.constant';
import {
  standardMqttPacketServerReferencePropertyToMqttPacketServerReferenceProperty,
} from '../../built-in/28-mqtt-packet-server-reference-property/standard/standard-mqtt-packet-server-reference-property-to-mqtt-packet-server-reference-property';
import {
  IStandardMqttPacketServerReferenceProperty,
} from '../../built-in/28-mqtt-packet-server-reference-property/standard/standard-mqtt-packet-server-reference-property.type';
import {
  MQTT_PACKET_REASON_STRING_PROPERTY_CODE,
} from '../../built-in/31-mqtt-packet-reason-string-property/constants/mqtt-packet-reason-string-property-code.constant';
import {
  standardMqttPacketReasonStringPropertyToMqttPacketReasonStringProperty,
} from '../../built-in/31-mqtt-packet-reason-string-property/standard/standard-mqtt-packet-reason-string-property-to-mqtt-packet-reason-string-property';
import {
  IStandardMqttPacketReasonStringProperty,
} from '../../built-in/31-mqtt-packet-reason-string-property/standard/standard-mqtt-packet-reason-string-property.type';
import {
  MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_CODE,
} from '../../built-in/33-mqtt-packet-receive-maximum-property/constants/mqtt-packet-receive-maximum-property-code.constant';
import {
  standardMqttPacketReceiveMaximumPropertyToMqttPacketReceiveMaximumProperty,
} from '../../built-in/33-mqtt-packet-receive-maximum-property/standard/standard-mqtt-packet-receive-maximum-property-to-mqtt-packet-receive-maximum-property';
import {
  IStandardMqttPacketReceiveMaximumProperty,
} from '../../built-in/33-mqtt-packet-receive-maximum-property/standard/standard-mqtt-packet-receive-maximum-property.type';
import {
  MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_CODE,
} from '../../built-in/34-mqtt-packet-topic-alias-maximum-property/constants/mqtt-packet-topic-alias-maximum-property-code.constant';
import {
  standardMqttPacketTopicAliasMaximumPropertyToMqttPacketTopicAliasMaximumProperty,
} from '../../built-in/34-mqtt-packet-topic-alias-maximum-property/standard/standard-mqtt-packet-topic-alias-maximum-property-to-mqtt-packet-topic-alias-maximum-property';
import {
  IStandardMqttPacketTopicAliasMaximumProperty,
} from '../../built-in/34-mqtt-packet-topic-alias-maximum-property/standard/standard-mqtt-packet-topic-alias-maximum-property.type';
import {
  MQTT_PACKET_TOPIC_ALIAS_PROPERTY_CODE,
} from '../../built-in/35-mqtt-packet-topic-alias-property/constants/mqtt-packet-topic-alias-property-code.constant';
import {
  standardMqttPacketTopicAliasPropertyToMqttPacketTopicAliasProperty,
} from '../../built-in/35-mqtt-packet-topic-alias-property/standard/standard-mqtt-packet-topic-alias-property-to-mqtt-packet-topic-alias-property';
import {
  IStandardMqttPacketTopicAliasProperty,
} from '../../built-in/35-mqtt-packet-topic-alias-property/standard/standard-mqtt-packet-topic-alias-property.type';
import {
  MQTT_PACKET_MAXIMUM_QOS_PROPERTY_CODE,
} from '../../built-in/36-mqtt-packet-maximum-qos-property/constants/mqtt-packet-maximum-qos-property-code.constant';
import {
  standardMqttPacketMaximumQoSPropertyToMqttPacketMaximumQoSProperty,
} from '../../built-in/36-mqtt-packet-maximum-qos-property/standard/standard-mqtt-packet-maximum-qos-property-to-mqtt-packet-maximum-qos-property';
import {
  IStandardMqttPacketMaximumQoSProperty,
} from '../../built-in/36-mqtt-packet-maximum-qos-property/standard/standard-mqtt-packet-maximum-qos-property.type';
import {
  MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_CODE,
} from '../../built-in/37-mqtt-packet-retain-available-property/constants/mqtt-packet-retain-available-property-code.constant';
import {
  standardMqttPacketRetainAvailablePropertyToMqttPacketRetainAvailableProperty,
} from '../../built-in/37-mqtt-packet-retain-available-property/standard/standard-mqtt-packet-retain-available-property-to-mqtt-packet-retain-available-property';
import {
  IStandardMqttPacketRetainAvailableProperty,
} from '../../built-in/37-mqtt-packet-retain-available-property/standard/standard-mqtt-packet-retain-available-property.type';
import {
  MQTT_PACKET_USER_PROPERTY_CODE,
} from '../../built-in/38-mqtt-packet-user-property-property/constants/mqtt-packet-user-property-code.constant';
import {
  MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_CODE,
} from '../../built-in/39-mqtt-packet-maximum-packet-size-property/constants/mqtt-packet-maximum-packet-size-property-code.constant';
import {
  standardMqttPacketMaximumPacketSizePropertyToMqttPacketMaximumPacketSizeProperty,
} from '../../built-in/39-mqtt-packet-maximum-packet-size-property/standard/standard-mqtt-packet-maximum-packet-size-property-to-mqtt-packet-maximum-packet-size-property';
import {
  IStandardMqttPacketMaximumPacketSizeProperty,
} from '../../built-in/39-mqtt-packet-maximum-packet-size-property/standard/standard-mqtt-packet-maximum-packet-size-property.type';
import {
  MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE,
} from '../../built-in/40-mqtt-packet-wildcard-subscription-available-property/constants/mqtt-packet-wildcard-subscription-available-property-code.constant';
import {
  standardMqttPacketWildcardSubscriptionAvailablePropertyToMqttPacketWildcardSubscriptionAvailableProperty,
} from '../../built-in/40-mqtt-packet-wildcard-subscription-available-property/standard/standard-mqtt-packet-wildcard-subscription-available-property-to-mqtt-packet-wildcard-subscription-available-property';
import {
  IStandardMqttPacketWildcardSubscriptionAvailableProperty,
} from '../../built-in/40-mqtt-packet-wildcard-subscription-available-property/standard/standard-mqtt-packet-wildcard-subscription-available-property.type';
import {
  MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_CODE,
} from '../../built-in/41-mqtt-packet-subscription-identifiers-available-property/constants/mqtt-packet-subscription-identifiers-available-property-code.constant';
import {
  standardMqttPacketSubscriptionIdentifiersAvailablePropertyToMqttPacketSubscriptionIdentifiersAvailableProperty,
} from '../../built-in/41-mqtt-packet-subscription-identifiers-available-property/standard/standard-mqtt-packet-subscription-identifiers-available-property-to-mqtt-packet-subscription-identifiers-available-property';
import {
  IStandardMqttPacketSubscriptionIdentifiersAvailableProperty,
} from '../../built-in/41-mqtt-packet-subscription-identifiers-available-property/standard/standard-mqtt-packet-subscription-identifiers-available-property.type';
import {
  MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE,
} from '../../built-in/42-mqtt-packet-shared-subscription-available-property/constants/mqtt-packet-shared-subscription-available-property-code.constant';
import { IGenericReadonlyMqttPacketProperty } from '../readonly-mqtt-packet-property.type';
import { IGenericStandardMqttPacketProperty } from './standard-mqtt-packet-property.type';

export function standardMqttPacketPropertyToReadonlyMqttPacketProperty(
  input: IGenericStandardMqttPacketProperty,
): IGenericReadonlyMqttPacketProperty {
  switch (input.getCode()) {
    // TODO
    case MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_CODE: // 01
      return standardMqttPacketPayloadFormatIndicatorPropertyToMqttPacketPayloadFormatIndicatorProperty(input as IStandardMqttPacketPayloadFormatIndicatorProperty);
    case MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_CODE:  // 02
      return standardMqttPacketMessageExpiryIntervalPropertyToMqttPacketMessageExpiryIntervalProperty(input as IStandardMqttPacketMessageExpiryIntervalProperty);
    case MQTT_PACKET_CONTENT_TYPE_PROPERTY_CODE: // 03
      return standardMqttPacketContentTypePropertyToMqttPacketContentTypeProperty(input as IStandardMqttPacketContentTypeProperty);
    case MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_CODE: // 08
      return standardMqttPacketResponseTopicPropertyToMqttPacketResponseTopicProperty(input as IStandardMqttPacketResponseTopicProperty);
    case MQTT_PACKET_CORRELATION_DATA_PROPERTY_CODE: // 09
      return standardMqttPacketCorrelationDataPropertyToMqttPacketCorrelationDataProperty(input as IStandardMqttPacketCorrelationDataProperty);
    case MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_CODE: // 11
      return standardMqttPacketSubscriptionIdentifierPropertyToMqttPacketSubscriptionIdentifierProperty(input as IStandardMqttPacketSubscriptionIdentifierProperty);
    case MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_CODE: // 17
      return standardMqttPacketSessionExpiryIntervalPropertyToMqttPacketSessionExpiryIntervalProperty(input as IStandardMqttPacketSessionExpiryIntervalProperty);
    case MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_CODE: // 18
      return standardMqttPacketAssignedClientIdentifierPropertyToMqttPacketAssignedClientIdentifierProperty(input as IStandardMqttPacketAssignedClientIdentifierProperty);
    case MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_CODE: // 19
      return standardMqttPacketServerKeepAlivePropertyToMqttPacketServerKeepAliveProperty(input as IStandardMqttPacketServerKeepAliveProperty);
    case MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_CODE: // 21
      return standardMqttPacketAuthenticationMethodPropertyToMqttPacketAuthenticationMethodProperty(input as IStandardMqttPacketAuthenticationMethodProperty);
    case MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_CODE: // 22
      return standardMqttPacketAuthenticationDataPropertyToMqttPacketAuthenticationDataProperty(input as IStandardMqttPacketAuthenticationDataProperty);
    case MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_CODE: // 23
      return standardMqttPacketRequestProblemInformationPropertyToMqttPacketRequestProblemInformationProperty(input as IStandardMqttPacketRequestProblemInformationProperty);
    case MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_CODE: // 24
      return standardMqttPacketWillDelayIntervalPropertyToMqttPacketWillDelayIntervalProperty(input as IStandardMqttPacketWillDelayIntervalProperty);
    case MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_CODE: // 25
      return standardMqttPacketRequestResponseInformationPropertyToMqttPacketRequestResponseInformationProperty(input as IStandardMqttPacketRequestResponseInformationProperty);
    case MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_CODE: // 26
      return standardMqttPacketResponseInformationPropertyToMqttPacketResponseInformationProperty(input as IStandardMqttPacketResponseInformationProperty);
    case MQTT_PACKET_SERVER_REFERENCE_PROPERTY_CODE: // 28
      return standardMqttPacketServerReferencePropertyToMqttPacketServerReferenceProperty(input as IStandardMqttPacketServerReferenceProperty);
    case MQTT_PACKET_REASON_STRING_PROPERTY_CODE:  // 31
      return standardMqttPacketReasonStringPropertyToMqttPacketReasonStringProperty(input as IStandardMqttPacketReasonStringProperty);
    case MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_CODE: // 33
      return standardMqttPacketReceiveMaximumPropertyToMqttPacketReceiveMaximumProperty(input as IStandardMqttPacketReceiveMaximumProperty);
    case MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_CODE: // 34
      return standardMqttPacketTopicAliasMaximumPropertyToMqttPacketTopicAliasMaximumProperty(input as IStandardMqttPacketTopicAliasMaximumProperty);
    case MQTT_PACKET_TOPIC_ALIAS_PROPERTY_CODE: // 35
      return standardMqttPacketTopicAliasPropertyToMqttPacketTopicAliasProperty(input as IStandardMqttPacketTopicAliasProperty);
    case MQTT_PACKET_MAXIMUM_QOS_PROPERTY_CODE: // 36
      return standardMqttPacketMaximumQoSPropertyToMqttPacketMaximumQoSProperty(input as IStandardMqttPacketMaximumQoSProperty);
    case MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_CODE: // 37
      return standardMqttPacketRetainAvailablePropertyToMqttPacketRetainAvailableProperty(input as IStandardMqttPacketRetainAvailableProperty);
    case MQTT_PACKET_USER_PROPERTY_CODE: // 38
      throw new Error(`The property ${input.getName()} cannot be converted to an MqttPacketProperty`);
    case MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_CODE: // 39
      return standardMqttPacketMaximumPacketSizePropertyToMqttPacketMaximumPacketSizeProperty(input as IStandardMqttPacketMaximumPacketSizeProperty);
    case MQTT_PACKET_WILDCARD_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE: // 40
      return standardMqttPacketWildcardSubscriptionAvailablePropertyToMqttPacketWildcardSubscriptionAvailableProperty(input as IStandardMqttPacketWildcardSubscriptionAvailableProperty);
    case MQTT_PACKET_SUBSCRIPTION_IDENTIFIERS_AVAILABLE_PROPERTY_CODE: // 41
      return standardMqttPacketSubscriptionIdentifierPropertyToMqttPacketSubscriptionIdentifierProperty(input as IStandardMqttPacketSubscriptionIdentifierProperty);
    case MQTT_PACKET_SHARED_SUBSCRIPTION_AVAILABLE_PROPERTY_CODE: // 42
      return standardMqttPacketSubscriptionIdentifiersAvailablePropertyToMqttPacketSubscriptionIdentifiersAvailableProperty(input as IStandardMqttPacketSubscriptionIdentifiersAvailableProperty);
    default:
      throw new Error(`Unsupported property: ${input.getName()}`);
  }
}
