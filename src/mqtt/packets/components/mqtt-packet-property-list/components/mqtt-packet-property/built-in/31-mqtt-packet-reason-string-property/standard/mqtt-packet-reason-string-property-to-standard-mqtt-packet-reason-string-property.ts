import { MQTT_PACKET_REASON_STRING_PROPERTY_NAME } from '../constants/mqtt-packet-reason-string-property-name.constant';
import { IMqttPacketReasonStringProperty } from '../mqtt-packet-reason-string-property.type';
import { IStandardMqttPacketReasonStringProperty } from './standard-mqtt-packet-reason-string-property.type';

export function mqttPacketReasonStringPropertyToStandardMqttPacketReasonStringProperty(
  {
    getValue,
  }: IMqttPacketReasonStringProperty,
): IStandardMqttPacketReasonStringProperty {
  return {
    [MQTT_PACKET_REASON_STRING_PROPERTY_NAME]: getValue().toString(),
  };
}
