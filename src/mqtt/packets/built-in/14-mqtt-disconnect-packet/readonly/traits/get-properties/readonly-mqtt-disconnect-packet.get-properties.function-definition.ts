import {
  IMqttPacketSessionExpiryIntervalProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/17-mqtt-packet-session-expiry-interval-property/mqtt-packet-session-expiry-interval-property.type';
import {
  IMqttPacketServerReferenceProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/28-mqtt-packet-server-reference-property/mqtt-packet-server-reference-property.type';
import {
  IMqttPacketReasonStringProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/31-mqtt-packet-reason-string-property/mqtt-packet-reason-string-property.type';
import {
  IMqttPacketUserProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/mqtt-packet-user-property.type';
import {
  IReadonlyMqttPacketPropertyList,
} from '../../../../../components/mqtt-packet-property-list/readonly/readonly-mqtt-packet-property-list.type';

export type IReadonlyMqttDisconnectPacketProperties =
  | IMqttPacketSessionExpiryIntervalProperty
  | IMqttPacketReasonStringProperty
  | IMqttPacketUserProperty
  | IMqttPacketServerReferenceProperty
  ;

export type IReadonlyMqttDisconnectPacketPropertyList = IReadonlyMqttPacketPropertyList<IReadonlyMqttDisconnectPacketProperties>;

export interface IReadonlyMqttDisconnectPacketGetPropertiesFunction {
  (): IReadonlyMqttDisconnectPacketPropertyList;
}
