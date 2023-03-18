import { IReadonlyStringBuffer } from '../../../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import {
  MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_CODE,
} from './constants/mqtt-packet-assigned-client-identifier-property-code.constant';
import {
  MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_NAME,
} from './constants/mqtt-packet-assigned-client-identifier-property-name.constant';

export type IMqttPacketAssignedClientIdentifierPropertyCode = typeof MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_CODE;
export type IMqttPacketAssignedClientIdentifierPropertyName = typeof MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_NAME;
export type IMqttPacketAssignedClientIdentifierPropertyValue = IReadonlyStringBuffer;

export interface IMqttPacketAssignedClientIdentifierProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketAssignedClientIdentifierPropertyCode, IMqttPacketAssignedClientIdentifierPropertyName, IMqttPacketAssignedClientIdentifierPropertyValue>
//
{

}

