import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_CODE } from '../constants/mqtt-packet-will-delay-interval-property-code.constant';
import { MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_NAME } from '../constants/mqtt-packet-will-delay-interval-property-name.constant';
import {
  IMqttPacketWillDelayIntervalProperty,
  IMqttPacketWillDelayIntervalPropertyCode,
  IMqttPacketWillDelayIntervalPropertyName,
  IMqttPacketWillDelayIntervalPropertyValue,
} from '../mqtt-packet-will-delay-interval-property.type';

export function createMqttPacketWillDelayIntervalProperty(
  value: IMqttPacketWillDelayIntervalPropertyValue,
): IMqttPacketWillDelayIntervalProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketWillDelayIntervalPropertyCode, IMqttPacketWillDelayIntervalPropertyName, IMqttPacketWillDelayIntervalPropertyValue>({
    code: MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_CODE,
    name: MQTT_PACKET_WILL_DELAY_INTERVAL_PROPERTY_NAME,
    value,
  });
}

