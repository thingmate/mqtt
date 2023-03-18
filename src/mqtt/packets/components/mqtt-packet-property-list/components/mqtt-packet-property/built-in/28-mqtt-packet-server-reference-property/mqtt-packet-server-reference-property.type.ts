import { IReadonlyStringBuffer } from '../../../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_SERVER_REFERENCE_PROPERTY_CODE } from './constants/mqtt-packet-server-reference-property-code.constant';
import { MQTT_PACKET_SERVER_REFERENCE_PROPERTY_NAME } from './constants/mqtt-packet-server-reference-property-name.constant';

export type IMqttPacketServerReferencePropertyCode = typeof MQTT_PACKET_SERVER_REFERENCE_PROPERTY_CODE;
export type IMqttPacketServerReferencePropertyName = typeof MQTT_PACKET_SERVER_REFERENCE_PROPERTY_NAME;
export type IMqttPacketServerReferencePropertyValue = IReadonlyStringBuffer;

export interface IMqttPacketServerReferenceProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketServerReferencePropertyCode, IMqttPacketServerReferencePropertyName, IMqttPacketServerReferencePropertyValue>
//
{

}

