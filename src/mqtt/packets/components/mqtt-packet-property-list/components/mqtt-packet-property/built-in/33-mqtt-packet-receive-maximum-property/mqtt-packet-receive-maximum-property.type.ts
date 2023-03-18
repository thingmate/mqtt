import { u16 } from '@lifaon/number-types';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_CODE } from './constants/mqtt-packet-receive-maximum-property-code.constant';
import { MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_NAME } from './constants/mqtt-packet-receive-maximum-property-name.constant';

export type IMqttPacketReceiveMaximumPropertyCode = typeof MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_CODE;
export type IMqttPacketReceiveMaximumPropertyName = typeof MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_NAME;
export type IMqttPacketReceiveMaximumPropertyValue = u16;

export interface IMqttPacketReceiveMaximumProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketReceiveMaximumPropertyCode, IMqttPacketReceiveMaximumPropertyName, IMqttPacketReceiveMaximumPropertyValue>
//
{

}

