import {
  IMqttPacketAuthenticationMethodProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/21-mqtt-packet-authentication-method-property/mqtt-packet-authentication-method-property.type';
import {
  IMqttPacketAuthenticationDataProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/22-mqtt-packet-authentication-data-property/mqtt-packet-authentication-data-property.type';
import {
  IMqttPacketReasonStringProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/31-mqtt-packet-reason-string-property/mqtt-packet-reason-string-property.type';
import {
  IMqttPacketUserProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/mqtt-packet-user-property.type';
import {
  IReadonlyMqttPacketPropertyList,
} from '../../../../../components/mqtt-packet-property-list/readonly/readonly-mqtt-packet-property-list.type';

export type IReadonlyMqttAuthPacketProperties =
  | IMqttPacketAuthenticationMethodProperty
  | IMqttPacketAuthenticationDataProperty
  | IMqttPacketReasonStringProperty
  | IMqttPacketUserProperty
  ;

export type IReadonlyMqttAuthPacketPropertyList = IReadonlyMqttPacketPropertyList<IReadonlyMqttAuthPacketProperties>;

export interface IReadonlyMqttAuthPacketGetPropertiesFunction {
  (): IReadonlyMqttAuthPacketPropertyList;
}
