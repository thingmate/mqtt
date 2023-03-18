import { IReadonlyStringBuffer } from '../../../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_CODE } from './constants/mqtt-packet-response-information-property-code.constant';
import { MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_NAME } from './constants/mqtt-packet-response-information-property-name.constant';

export type IMqttPacketResponseInformationPropertyCode = typeof MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_CODE;
export type IMqttPacketResponseInformationPropertyName = typeof MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_NAME;
export type IMqttPacketResponseInformationPropertyValue = IReadonlyStringBuffer;

export interface IMqttPacketResponseInformationProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketResponseInformationPropertyCode, IMqttPacketResponseInformationPropertyName, IMqttPacketResponseInformationPropertyValue>
//
{

}

