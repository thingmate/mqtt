import {
  IMqttPacketSubscriptionIdentifierProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/11-mqtt-packet-subscription-identifier-property/mqtt-packet-subscription-identifier-property.type';
import {
  IMqttPacketUserProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/mqtt-packet-user-property.type';
import {
  IReadonlyMqttPacketPropertyList,
} from '../../../../../components/mqtt-packet-property-list/readonly/readonly-mqtt-packet-property-list.type';

export type IReadonlyMqttSubscribePacketProperties =
  | IMqttPacketSubscriptionIdentifierProperty
  | IMqttPacketUserProperty
  ;

export type IReadonlyMqttSubscribePacketPropertyList = IReadonlyMqttPacketPropertyList<IReadonlyMqttSubscribePacketProperties>;

export interface IReadonlyMqttSubscribePacketGetPropertiesFunction {
  (): IReadonlyMqttSubscribePacketPropertyList;
}
