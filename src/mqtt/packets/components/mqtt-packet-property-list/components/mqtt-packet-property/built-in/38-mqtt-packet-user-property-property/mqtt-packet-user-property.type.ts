import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { IMqttPacketUserPropertyEntry } from './components/mqtt-packet-user-property-entry/mqtt-packet-user-property-entry.type';
import { MQTT_PACKET_USER_PROPERTY_CODE } from './constants/mqtt-packet-user-property-code.constant';
import { MQTT_PACKET_USER_PROPERTY_NAME } from './constants/mqtt-packet-user-property-name.constant';

export type IMqttPacketUserPropertyCode = typeof MQTT_PACKET_USER_PROPERTY_CODE;
export type IMqttPacketUserPropertyName = typeof MQTT_PACKET_USER_PROPERTY_NAME;
export type IMqttPacketUserPropertyValue = IMqttPacketUserPropertyEntry;

export interface IMqttPacketUserProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketUserPropertyCode, IMqttPacketUserPropertyName, IMqttPacketUserPropertyValue>
//
{

}

