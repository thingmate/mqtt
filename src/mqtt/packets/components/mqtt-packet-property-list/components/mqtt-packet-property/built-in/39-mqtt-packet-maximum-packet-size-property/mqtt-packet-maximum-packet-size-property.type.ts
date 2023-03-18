import { u32 } from '@lifaon/number-types';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_CODE } from './constants/mqtt-packet-maximum-packet-size-property-code.constant';
import { MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_NAME } from './constants/mqtt-packet-maximum-packet-size-property-name.constant';

export type IMqttPacketMaximumPacketSizePropertyCode = typeof MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_CODE;
export type IMqttPacketMaximumPacketSizePropertyName = typeof MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_NAME;
export type IMqttPacketMaximumPacketSizePropertyValue = u32;

export interface IMqttPacketMaximumPacketSizeProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketMaximumPacketSizePropertyCode, IMqttPacketMaximumPacketSizePropertyName, IMqttPacketMaximumPacketSizePropertyValue>
//
{

}

