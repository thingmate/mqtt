import { IReadonlyStringBuffer } from '../../../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_CODE } from './constants/mqtt-packet-response-topic-property-code.constant';
import { MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_NAME } from './constants/mqtt-packet-response-topic-property-name.constant';

export type IMqttPacketResponseTopicPropertyCode = typeof MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_CODE;
export type IMqttPacketResponseTopicPropertyName = typeof MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_NAME;
export type IMqttPacketResponseTopicPropertyValue = IReadonlyStringBuffer;

export interface IMqttPacketResponseTopicProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketResponseTopicPropertyCode, IMqttPacketResponseTopicPropertyName, IMqttPacketResponseTopicPropertyValue>
//
{

}

