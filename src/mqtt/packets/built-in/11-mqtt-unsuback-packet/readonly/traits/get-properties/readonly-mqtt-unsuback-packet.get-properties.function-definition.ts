import {
  IMqttPacketReasonStringProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/31-mqtt-packet-reason-string-property/mqtt-packet-reason-string-property.type';
import {
  IMqttPacketUserProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/mqtt-packet-user-property.type';
import {
  IReadonlyMqttPacketPropertyList,
} from '../../../../../components/mqtt-packet-property-list/readonly/readonly-mqtt-packet-property-list.type';

export type IReadonlyMqttUnsubackPacketProperties =
  | IMqttPacketReasonStringProperty
  | IMqttPacketUserProperty
  ;

export type IReadonlyMqttUnsubackPacketPropertyList = IReadonlyMqttPacketPropertyList<IReadonlyMqttUnsubackPacketProperties>;

export interface IReadonlyMqttUnsubackPacketGetPropertiesFunction {
  (): IReadonlyMqttUnsubackPacketPropertyList;
}