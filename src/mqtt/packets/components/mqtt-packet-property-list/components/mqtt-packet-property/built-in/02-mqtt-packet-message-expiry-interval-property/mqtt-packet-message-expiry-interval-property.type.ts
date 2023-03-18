import { u32 } from '@lifaon/number-types';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_CODE } from './constants/mqtt-packet-message-expiry-interval-property-code.constant';
import { MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_NAME } from './constants/mqtt-packet-message-expiry-interval-property-name.constant';

export type IMqttPacketMessageExpiryIntervalPropertyCode = typeof MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_CODE;
export type IMqttPacketMessageExpiryIntervalPropertyName = typeof MQTT_PACKET_MESSAGE_EXPIRY_INTERVAL_PROPERTY_NAME;
export type IMqttPacketMessageExpiryIntervalPropertyValue = u32;

export interface IMqttPacketMessageExpiryIntervalProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketMessageExpiryIntervalPropertyCode, IMqttPacketMessageExpiryIntervalPropertyName, IMqttPacketMessageExpiryIntervalPropertyValue>
//
{

}

