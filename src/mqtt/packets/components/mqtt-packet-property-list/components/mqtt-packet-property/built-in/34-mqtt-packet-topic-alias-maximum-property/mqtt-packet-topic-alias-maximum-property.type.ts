import { u16 } from '@lifaon/number-types';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_CODE } from './constants/mqtt-packet-topic-alias-maximum-property-code.constant';
import { MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_NAME } from './constants/mqtt-packet-topic-alias-maximum-property-name.constant';

export type IMqttPacketTopicAliasMaximumPropertyCode = typeof MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_CODE;
export type IMqttPacketTopicAliasMaximumPropertyName = typeof MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_NAME;
export type IMqttPacketTopicAliasMaximumPropertyValue = u16;

export interface IMqttPacketTopicAliasMaximumProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketTopicAliasMaximumPropertyCode, IMqttPacketTopicAliasMaximumPropertyName, IMqttPacketTopicAliasMaximumPropertyValue>
//
{

}

