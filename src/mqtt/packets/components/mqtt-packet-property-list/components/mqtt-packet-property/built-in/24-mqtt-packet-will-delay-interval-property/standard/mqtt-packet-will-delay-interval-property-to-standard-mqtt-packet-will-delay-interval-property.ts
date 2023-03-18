import { MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_NAME } from '../constants/mqtt-packet-will-delay-interval-property-name.constant';
import { IMqttPacketWillDelayIntervalProperty } from '../mqtt-packet-will-delay-interval-property.type';
import { IStandardMqttPacketWillDelayIntervalProperty } from './standard-mqtt-packet-will-delay-interval-property.type';

export function mqttPacketWillDelayIntervalPropertyToStandardMqttPacketWillDelayIntervalProperty(
  {
    getValue,
  }: IMqttPacketWillDelayIntervalProperty,
): IStandardMqttPacketWillDelayIntervalProperty {
  return {
    [MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_NAME]: getValue(),
  };
}
