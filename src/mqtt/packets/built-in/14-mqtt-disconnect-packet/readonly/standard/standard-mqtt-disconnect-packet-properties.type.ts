import {
  IStandardMqttPacketSessionExpiryIntervalProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/17-mqtt-packet-session-expiry-interval-property/standard/standard-mqtt-packet-session-expiry-interval-property.type';
import {
  IStandardMqttPacketServerReferenceProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/28-mqtt-packet-server-reference-property/standard/standard-mqtt-packet-server-reference-property.type';
import {
  IStandardMqttPacketReasonStringProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/31-mqtt-packet-reason-string-property/standard/standard-mqtt-packet-reason-string-property.type';
import {
  IStandardMqttPacketUserProperties,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/standard/standard-mqtt-packet-user-properties.type';

export interface IStandardMqttDisconnectPacketProperties extends //
  Partial<IStandardMqttPacketSessionExpiryIntervalProperty>,
  Partial<IStandardMqttPacketReasonStringProperty>,
  Partial<IStandardMqttPacketUserProperties>,
  Partial<IStandardMqttPacketServerReferenceProperty>
//
{

}
