import { IReadonlyStringBuffer } from '../../../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_REASON_STRING_PROPERTY_CODE } from './constants/mqtt-packet-reason-string-property-code.constant';
import { MQTT_PACKET_REASON_STRING_PROPERTY_NAME } from './constants/mqtt-packet-reason-string-property-name.constant';

export type IMqttPacketReasonStringPropertyCode = typeof MQTT_PACKET_REASON_STRING_PROPERTY_CODE;
export type IMqttPacketReasonStringPropertyName = typeof MQTT_PACKET_REASON_STRING_PROPERTY_NAME;
export type IMqttPacketReasonStringPropertyValue = IReadonlyStringBuffer;

export interface IMqttPacketReasonStringProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketReasonStringPropertyCode, IMqttPacketReasonStringPropertyName, IMqttPacketReasonStringPropertyValue>
//
{

}

