import { u16 } from '@lifaon/number-types';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_CODE } from './constants/mqtt-packet-server-keep-alive-property-code.constant';
import { MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_NAME } from './constants/mqtt-packet-server-keep-alive-property-name.constant';

export type IMqttPacketServerKeepAlivePropertyCode = typeof MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_CODE;
export type IMqttPacketServerKeepAlivePropertyName = typeof MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_NAME;
export type IMqttPacketServerKeepAlivePropertyValue = u16;

export interface IMqttPacketServerKeepAliveProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketServerKeepAlivePropertyCode, IMqttPacketServerKeepAlivePropertyName, IMqttPacketServerKeepAlivePropertyValue>
//
{

}

