import {
  IMqttPacketSessionExpiryIntervalProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/17-mqtt-packet-session-expiry-interval-property/mqtt-packet-session-expiry-interval-property.type';
import {
  IMqttPacketAuthenticationMethodProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/21-mqtt-packet-authentication-method-property/mqtt-packet-authentication-method-property.type';
import {
  IMqttPacketAuthenticationDataProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/22-mqtt-packet-authentication-data-property/mqtt-packet-authentication-data-property.type';
import {
  IMqttPacketRequestProblemInformationProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/23-mqtt-packet-request-problem-information-property/mqtt-packet-request-problem-information-property.type';
import {
  IMqttPacketRequestResponseInformationProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/25-mqtt-packet-request-response-information-property/mqtt-packet-request-response-information-property.type';
import {
  IMqttPacketReceiveMaximumProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/33-mqtt-packet-receive-maximum-property/mqtt-packet-receive-maximum-property.type';
import {
  IMqttPacketTopicAliasMaximumProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/34-mqtt-packet-topic-alias-maximum-property/mqtt-packet-topic-alias-maximum-property.type';
import {
  IMqttPacketUserProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/mqtt-packet-user-property.type';
import {
  IMqttPacketMaximumPacketSizeProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/39-mqtt-packet-maximum-packet-size-property/mqtt-packet-maximum-packet-size-property.type';
import {
  IReadonlyMqttPacketPropertyList,
} from '../../../../../components/mqtt-packet-property-list/readonly/readonly-mqtt-packet-property-list.type';

export type IReadonlyMqttConnectPacketProperties =
  | IMqttPacketSessionExpiryIntervalProperty
  | IMqttPacketReceiveMaximumProperty
  | IMqttPacketMaximumPacketSizeProperty
  | IMqttPacketTopicAliasMaximumProperty
  | IMqttPacketRequestResponseInformationProperty
  | IMqttPacketRequestProblemInformationProperty
  | IMqttPacketUserProperty
  | IMqttPacketAuthenticationMethodProperty
  | IMqttPacketAuthenticationDataProperty
  ;

export type IReadonlyMqttConnectPacketPropertyList = IReadonlyMqttPacketPropertyList<IReadonlyMqttConnectPacketProperties>;

export interface IReadonlyMqttConnectPacketGetPropertiesFunction {
  (): IReadonlyMqttConnectPacketPropertyList;
}
