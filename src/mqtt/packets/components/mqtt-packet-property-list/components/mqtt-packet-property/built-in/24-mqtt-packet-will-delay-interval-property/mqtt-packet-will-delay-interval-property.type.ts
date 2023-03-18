import { u32 } from '@lifaon/number-types';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_CODE } from './constants/mqtt-packet-will-delay-interval-property-code.constant';
import { MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_NAME } from './constants/mqtt-packet-will-delay-interval-property-name.constant';

export type IMqttPacketWillDelayIntervalPropertyCode = typeof MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_CODE;
export type IMqttPacketWillDelayIntervalPropertyName = typeof MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_NAME;
export type IMqttPacketWillDelayIntervalPropertyValue = u32;

export interface IMqttPacketWillDelayIntervalProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketWillDelayIntervalPropertyCode, IMqttPacketWillDelayIntervalPropertyName, IMqttPacketWillDelayIntervalPropertyValue>
//
{

}

