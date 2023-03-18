import { u16 } from '@lifaon/number-types';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_TOPIC_ALIAS_PROPERTY_CODE } from './constants/mqtt-packet-topic-alias-property-code.constant';
import { MQTT_PACKET_TOPIC_ALIAS_PROPERTY_NAME } from './constants/mqtt-packet-topic-alias-property-name.constant';

export type IMqttPacketTopicAliasPropertyCode = typeof MQTT_PACKET_TOPIC_ALIAS_PROPERTY_CODE;
export type IMqttPacketTopicAliasPropertyName = typeof MQTT_PACKET_TOPIC_ALIAS_PROPERTY_NAME;
export type IMqttPacketTopicAliasPropertyValue = u16;

export interface IMqttPacketTopicAliasProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketTopicAliasPropertyCode, IMqttPacketTopicAliasPropertyName, IMqttPacketTopicAliasPropertyValue>
//
{

}

