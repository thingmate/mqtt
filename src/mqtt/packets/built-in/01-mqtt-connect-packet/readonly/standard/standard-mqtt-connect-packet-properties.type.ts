import {
  IStandardMqttPacketSessionExpiryIntervalProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/17-mqtt-packet-session-expiry-interval-property/standard/standard-mqtt-packet-session-expiry-interval-property.type';
import {
  IStandardMqttPacketAuthenticationMethodProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/21-mqtt-packet-authentication-method-property/standard/standard-mqtt-packet-authentication-method-property.type';
import {
  IStandardMqttPacketAuthenticationDataProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/22-mqtt-packet-authentication-data-property/standard/standard-mqtt-packet-authentication-data-property.type';
import {
  IStandardMqttPacketRequestProblemInformationProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/23-mqtt-packet-request-problem-information-property/standard/standard-mqtt-packet-request-problem-information-property.type';
import {
  IStandardMqttPacketRequestResponseInformationProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/25-mqtt-packet-request-response-information-property/standard/standard-mqtt-packet-request-response-information-property.type';
import {
  IStandardMqttPacketReceiveMaximumProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/33-mqtt-packet-receive-maximum-property/standard/standard-mqtt-packet-receive-maximum-property.type';
import {
  IStandardMqttPacketTopicAliasMaximumProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/34-mqtt-packet-topic-alias-maximum-property/standard/standard-mqtt-packet-topic-alias-maximum-property.type';
import {
  IStandardMqttPacketUserProperties,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/standard/standard-mqtt-packet-user-properties.type';
import {
  IStandardMqttPacketMaximumPacketSizeProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/39-mqtt-packet-maximum-packet-size-property/standard/standard-mqtt-packet-maximum-packet-size-property.type';

export interface IStandardMqttConnectPacketProperties extends //
  Partial<IStandardMqttPacketSessionExpiryIntervalProperty>,
  Partial<IStandardMqttPacketReceiveMaximumProperty>,
  Partial<IStandardMqttPacketMaximumPacketSizeProperty>,
  Partial<IStandardMqttPacketTopicAliasMaximumProperty>,
  Partial<IStandardMqttPacketRequestResponseInformationProperty>,
  Partial<IStandardMqttPacketRequestProblemInformationProperty>,
  Partial<Partial<IStandardMqttPacketUserProperties>>,
  Partial<IStandardMqttPacketAuthenticationMethodProperty>,
  Partial<IStandardMqttPacketAuthenticationDataProperty>
//
{

}
