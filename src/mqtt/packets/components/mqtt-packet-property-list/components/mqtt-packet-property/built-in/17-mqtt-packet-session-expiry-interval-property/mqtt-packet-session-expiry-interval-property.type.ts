import { u32 } from '@lifaon/number-types';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_CODE } from './constants/mqtt-packet-session-expiry-interval-property-code.constant';
import { MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_NAME } from './constants/mqtt-packet-session-expiry-interval-property-name.constant';

export type IMqttPacketSessionExpiryIntervalPropertyCode = typeof MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_CODE;
export type IMqttPacketSessionExpiryIntervalPropertyName = typeof MQTT_PACKET_SESSION_EXPIRY_INTERVAL_PROPERTY_NAME;
export type IMqttPacketSessionExpiryIntervalPropertyValue = u32;

export interface IMqttPacketSessionExpiryIntervalProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketSessionExpiryIntervalPropertyCode, IMqttPacketSessionExpiryIntervalPropertyName, IMqttPacketSessionExpiryIntervalPropertyValue>
//
{

}

