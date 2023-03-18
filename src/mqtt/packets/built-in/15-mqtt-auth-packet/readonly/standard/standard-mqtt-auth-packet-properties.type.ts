import {
  IStandardMqttPacketAuthenticationMethodProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/21-mqtt-packet-authentication-method-property/standard/standard-mqtt-packet-authentication-method-property.type';
import {
  IStandardMqttPacketAuthenticationDataProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/22-mqtt-packet-authentication-data-property/standard/standard-mqtt-packet-authentication-data-property.type';
import {
  IStandardMqttPacketReasonStringProperty,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/31-mqtt-packet-reason-string-property/standard/standard-mqtt-packet-reason-string-property.type';
import {
  IStandardMqttPacketUserProperties,
} from '../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/standard/standard-mqtt-packet-user-properties.type';

export interface IStandardMqttAuthPacketProperties extends //
  Partial<IStandardMqttPacketAuthenticationMethodProperty>,
  Partial<IStandardMqttPacketAuthenticationDataProperty>,
  Partial<IStandardMqttPacketReasonStringProperty>,
  Partial<IStandardMqttPacketUserProperties>
//
{

}
