import { IReadonlyStringBuffer } from '../../../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_CONTENT_TYPE_PROPERTY_CODE } from './constants/mqtt-packet-content-type-property-code.constant';
import { MQTT_PACKET_CONTENT_TYPE_PROPERTY_NAME } from './constants/mqtt-packet-content-type-property-name.constant';

export type IMqttPacketContentTypePropertyCode = typeof MQTT_PACKET_CONTENT_TYPE_PROPERTY_CODE;
export type IMqttPacketContentTypePropertyName = typeof MQTT_PACKET_CONTENT_TYPE_PROPERTY_NAME;
export type IMqttPacketContentTypePropertyValue = IReadonlyStringBuffer;

export interface IMqttPacketContentTypeProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketContentTypePropertyCode, IMqttPacketContentTypePropertyName, IMqttPacketContentTypePropertyValue>
//
{

}

