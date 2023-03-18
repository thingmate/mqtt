import {
  IStandardMqttPacketSubscriptionIdentifierProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/11-mqtt-packet-subscription-identifier-property/standard/standard-mqtt-packet-subscription-identifier-property.type';
import {
  IStandardMqttPacketUserProperties,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/standard/standard-mqtt-packet-user-properties.type';

export interface IStandardMqttSubscribePacketProperties extends //
  Partial<IStandardMqttPacketSubscriptionIdentifierProperty>,
  Partial<IStandardMqttPacketUserProperties>
//
{

}
