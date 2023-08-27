import {
  IStandardMqttPacketSessionExpiryIntervalProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/17-mqtt-packet-session-expiry-interval-property/standard/standard-mqtt-packet-session-expiry-interval-property.type';
import {
  IStandardMqttPacketAssignedClientIdentifierProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/18-mqtt-packet-assigned-client-identifier-property/standard/standard-mqtt-packet-assigned-client-identifier-property.type';
import {
  IStandardMqttPacketServerKeepAliveProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/19-mqtt-packet-server-keep-alive-property/standard/standard-mqtt-packet-server-keep-alive-property.type';
import {
  IStandardMqttPacketAuthenticationMethodProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/21-mqtt-packet-authentication-method-property/standard/standard-mqtt-packet-authentication-method-property.type';
import {
  IStandardMqttPacketAuthenticationDataProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/22-mqtt-packet-authentication-data-property/standard/standard-mqtt-packet-authentication-data-property.type';
import {
  IStandardMqttPacketResponseInformationProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/26-mqtt-packet-response-information-property/standard/standard-mqtt-packet-response-information-property.type';
import {
  IStandardMqttPacketServerReferenceProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/28-mqtt-packet-server-reference-property/standard/standard-mqtt-packet-server-reference-property.type';
import {
  IStandardMqttPacketReasonStringProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/31-mqtt-packet-reason-string-property/standard/standard-mqtt-packet-reason-string-property.type';
import {
  IStandardMqttPacketReceiveMaximumProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/33-mqtt-packet-receive-maximum-property/standard/standard-mqtt-packet-receive-maximum-property.type';
import {
  IStandardMqttPacketTopicAliasMaximumProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/34-mqtt-packet-topic-alias-maximum-property/standard/standard-mqtt-packet-topic-alias-maximum-property.type';
import {
  IStandardMqttPacketMaximumQoSProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/36-mqtt-packet-maximum-qos-property/standard/standard-mqtt-packet-maximum-qos-property.type';
import {
  IStandardMqttPacketRetainAvailableProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/37-mqtt-packet-retain-available-property/standard/standard-mqtt-packet-retain-available-property.type';
import {
  IStandardMqttPacketUserProperties,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/standard/standard-mqtt-packet-user-properties.type';
import {
  IStandardMqttPacketMaximumPacketSizeProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/39-mqtt-packet-maximum-packet-size-property/standard/standard-mqtt-packet-maximum-packet-size-property.type';
import {
  IStandardMqttPacketWildcardSubscriptionAvailableProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/40-mqtt-packet-wildcard-subscription-available-property/standard/standard-mqtt-packet-wildcard-subscription-available-property.type';
import {
  IStandardMqttPacketSubscriptionIdentifiersAvailableProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/41-mqtt-packet-subscription-identifiers-available-property/standard/standard-mqtt-packet-subscription-identifiers-available-property.type';
import {
  IStandardMqttPacketSharedSubscriptionAvailableProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/42-mqtt-packet-shared-subscription-available-property/standard/standard-mqtt-packet-shared-subscription-available-property.type';

export interface IStandardMqttConnackPacketProperties extends //
  Partial<IStandardMqttPacketSessionExpiryIntervalProperty>,
  Partial<IStandardMqttPacketReceiveMaximumProperty>,
  Partial<IStandardMqttPacketMaximumQoSProperty>,
  Partial<IStandardMqttPacketRetainAvailableProperty>,
  Partial<IStandardMqttPacketMaximumPacketSizeProperty>,
  Partial<IStandardMqttPacketAssignedClientIdentifierProperty>,
  Partial<IStandardMqttPacketTopicAliasMaximumProperty>,
  Partial<IStandardMqttPacketReasonStringProperty>,
  Partial<IStandardMqttPacketUserProperties>,
  Partial<IStandardMqttPacketWildcardSubscriptionAvailableProperty>,
  Partial<IStandardMqttPacketSubscriptionIdentifiersAvailableProperty>,
  Partial<IStandardMqttPacketSharedSubscriptionAvailableProperty>,
  Partial<IStandardMqttPacketServerKeepAliveProperty>,
  Partial<IStandardMqttPacketResponseInformationProperty>,
  Partial<IStandardMqttPacketServerReferenceProperty>,
  Partial<IStandardMqttPacketAuthenticationMethodProperty>,
  Partial<IStandardMqttPacketAuthenticationDataProperty>
//
{

}
