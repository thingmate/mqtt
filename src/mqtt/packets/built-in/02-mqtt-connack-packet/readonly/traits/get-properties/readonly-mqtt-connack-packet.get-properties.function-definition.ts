import {
  IMqttPacketSessionExpiryIntervalProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/17-mqtt-packet-session-expiry-interval-property/mqtt-packet-session-expiry-interval-property.type';
import {
  IMqttPacketAssignedClientIdentifierProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/18-mqtt-packet-assigned-client-identifier-property/mqtt-packet-assigned-client-identifier-property.type';
import {
  IMqttPacketServerKeepAliveProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/19-mqtt-packet-server-keep-alive-property/mqtt-packet-server-keep-alive-property.type';
import {
  IMqttPacketAuthenticationMethodProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/21-mqtt-packet-authentication-method-property/mqtt-packet-authentication-method-property.type';
import {
  IMqttPacketAuthenticationDataProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/22-mqtt-packet-authentication-data-property/mqtt-packet-authentication-data-property.type';
import {
  IMqttPacketResponseInformationProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/26-mqtt-packet-response-information-property/mqtt-packet-response-information-property.type';
import {
  IMqttPacketServerReferenceProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/28-mqtt-packet-server-reference-property/mqtt-packet-server-reference-property.type';
import {
  IMqttPacketReasonStringProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/31-mqtt-packet-reason-string-property/mqtt-packet-reason-string-property.type';
import {
  IMqttPacketReceiveMaximumProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/33-mqtt-packet-receive-maximum-property/mqtt-packet-receive-maximum-property.type';
import {
  IMqttPacketTopicAliasMaximumProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/34-mqtt-packet-topic-alias-maximum-property/mqtt-packet-topic-alias-maximum-property.type';
import {
  IMqttPacketMaximumQoSProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/36-mqtt-packet-maximum-qos-property/mqtt-packet-maximum-qos-property.type';
import {
  IMqttPacketRetainAvailableProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/37-mqtt-packet-retain-available-property/mqtt-packet-retain-available-property.type';
import {
  IMqttPacketUserProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/mqtt-packet-user-property.type';
import {
  IMqttPacketMaximumPacketSizeProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/39-mqtt-packet-maximum-packet-size-property/mqtt-packet-maximum-packet-size-property.type';
import {
  IMqttPacketWildcardSubscriptionAvailableProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/40-mqtt-packet-wildcard-subscription-available-property/mqtt-packet-wildcard-subscription-available-property.type';
import {
  IMqttPacketSubscriptionIdentifiersAvailableProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/41-mqtt-packet-subscription-identifiers-available-property/mqtt-packet-subscription-identifiers-available-property.type';
import {
  IMqttPacketSharedSubscriptionAvailableProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/42-mqtt-packet-shared-subscription-available-property/mqtt-packet-shared-subscription-available-property.type';
import {
  IReadonlyMqttPacketPropertyList,
} from '../../../../../components/mqtt-packet-property-list/readonly/readonly-mqtt-packet-property-list.type';

export type IReadonlyMqttConnackPacketProperties =
  | IMqttPacketSessionExpiryIntervalProperty
  | IMqttPacketReceiveMaximumProperty
  | IMqttPacketMaximumQoSProperty
  | IMqttPacketRetainAvailableProperty
  | IMqttPacketMaximumPacketSizeProperty
  | IMqttPacketAssignedClientIdentifierProperty
  | IMqttPacketTopicAliasMaximumProperty
  | IMqttPacketReasonStringProperty
  | IMqttPacketUserProperty
  | IMqttPacketWildcardSubscriptionAvailableProperty
  | IMqttPacketSubscriptionIdentifiersAvailableProperty
  | IMqttPacketSharedSubscriptionAvailableProperty
  | IMqttPacketServerKeepAliveProperty
  | IMqttPacketResponseInformationProperty
  | IMqttPacketServerReferenceProperty
  | IMqttPacketAuthenticationMethodProperty
  | IMqttPacketAuthenticationDataProperty
  ;

export type IReadonlyMqttConnackPacketPropertyList = IReadonlyMqttPacketPropertyList<IReadonlyMqttConnackPacketProperties>;

export interface IReadonlyMqttConnackPacketGetPropertiesFunction {
  (): IReadonlyMqttConnackPacketPropertyList;
}
