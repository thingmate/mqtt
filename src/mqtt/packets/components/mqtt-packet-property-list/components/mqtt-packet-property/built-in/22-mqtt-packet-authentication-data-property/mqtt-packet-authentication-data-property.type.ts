import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_CODE } from './constants/mqtt-packet-authentication-data-property-code.constant';
import { MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_NAME } from './constants/mqtt-packet-authentication-data-property-name.constant';

export type IMqttPacketAuthenticationDataPropertyCode = typeof MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_CODE;
export type IMqttPacketAuthenticationDataPropertyName = typeof MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_NAME;
export type IMqttPacketAuthenticationDataPropertyValue = Uint8Array;

export interface IMqttPacketAuthenticationDataProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketAuthenticationDataPropertyCode, IMqttPacketAuthenticationDataPropertyName, IMqttPacketAuthenticationDataPropertyValue>
//
{

}

