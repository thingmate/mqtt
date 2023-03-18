import { u16 } from '@lifaon/number-types';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_MAXIMUM_QOS_PROPERTY_CODE } from './constants/mqtt-packet-maximum-qos-property-code.constant';
import { MQTT_PACKET_MAXIMUM_QOS_PROPERTY_NAME } from './constants/mqtt-packet-maximum-qos-property-name.constant';

export type IMqttPacketMaximumQoSPropertyCode = typeof MQTT_PACKET_MAXIMUM_QOS_PROPERTY_CODE;
export type IMqttPacketMaximumQoSPropertyName = typeof MQTT_PACKET_MAXIMUM_QOS_PROPERTY_NAME;
export type IMqttPacketMaximumQoSPropertyValue = u16;

export interface IMqttPacketMaximumQoSProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketMaximumQoSPropertyCode, IMqttPacketMaximumQoSPropertyName, IMqttPacketMaximumQoSPropertyValue>
//
{

}

