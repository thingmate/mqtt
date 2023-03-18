import { IVariableByteInteger } from '../../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_CODE } from './constants/mqtt-packet-subscription-identifier-property-code.constant';
import { MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_NAME } from './constants/mqtt-packet-subscription-identifier-property-name.constant';

export type IMqttPacketSubscriptionIdentifierPropertyCode = typeof MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_CODE;
export type IMqttPacketSubscriptionIdentifierPropertyName = typeof MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_NAME;
export type IMqttPacketSubscriptionIdentifierPropertyValue = IVariableByteInteger;

export interface IMqttPacketSubscriptionIdentifierProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketSubscriptionIdentifierPropertyCode, IMqttPacketSubscriptionIdentifierPropertyName, IMqttPacketSubscriptionIdentifierPropertyValue>
//
{

}

