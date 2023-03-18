import { IReadonlyStringBuffer } from '../../../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_CODE } from './constants/mqtt-packet-authentication-method-property-code.constant';
import { MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_NAME } from './constants/mqtt-packet-authentication-method-property-name.constant';

export type IMqttPacketAuthenticationMethodPropertyCode = typeof MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_CODE;
export type IMqttPacketAuthenticationMethodPropertyName = typeof MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_NAME;
export type IMqttPacketAuthenticationMethodPropertyValue = IReadonlyStringBuffer;

export interface IMqttPacketAuthenticationMethodProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketAuthenticationMethodPropertyCode, IMqttPacketAuthenticationMethodPropertyName, IMqttPacketAuthenticationMethodPropertyValue>
//
{

}

