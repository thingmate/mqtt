import {
  IStandardMqttPacketReasonStringProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/31-mqtt-packet-reason-string-property/standard/standard-mqtt-packet-reason-string-property.type';
import {
  IStandardMqttPacketUserProperties,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/standard/standard-mqtt-packet-user-properties.type';

export interface IStandardMqttPubcompPacketProperties extends //
  Partial<IStandardMqttPacketReasonStringProperty>,
  Partial<IStandardMqttPacketUserProperties>
//
{

}
