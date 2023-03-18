import { MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_NAME } from '../constants/mqtt-packet-will-delay-interval-property-name.constant';
import { createMqttPacketWillDelayIntervalProperty } from '../implementations/create-mqtt-packet-will-delay-interval-property';
import { IMqttPacketWillDelayIntervalProperty } from '../mqtt-packet-will-delay-interval-property.type';
import { IStandardMqttPacketWillDelayIntervalProperty } from './standard-mqtt-packet-will-delay-interval-property.type';

export function standardMqttPacketWillDelayIntervalPropertyToMqttPacketWillDelayIntervalProperty(
  input: IStandardMqttPacketWillDelayIntervalProperty,
): IMqttPacketWillDelayIntervalProperty {
  return createMqttPacketWillDelayIntervalProperty(
    input[MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_NAME],
  );
}
