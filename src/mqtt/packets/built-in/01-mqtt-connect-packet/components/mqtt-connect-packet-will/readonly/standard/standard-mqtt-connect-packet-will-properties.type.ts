import {
  IStandardMqttPacketPayloadFormatIndicatorProperty,
} from '../../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/01-mqtt-packet-payload-format-indicator-property/standard/standard-mqtt-packet-payload-format-indicator-property.type';
import {
  IStandardMqttPacketMessageExpiryIntervalProperty,
} from '../../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/02-mqtt-packet-message-expiry-interval-property/standard/standard-mqtt-packet-message-expiry-interval-property.type';
import {
  IStandardMqttPacketContentTypeProperty,
} from '../../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/03-mqtt-packet-content-type-property/standard/standard-mqtt-packet-content-type-property.type';
import {
  IStandardMqttPacketResponseTopicProperty,
} from '../../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/08-mqtt-packet-response-topic-property/standard/standard-mqtt-packet-response-topic-property.type';
import {
  IStandardMqttPacketCorrelationDataProperty,
} from '../../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/09-mqtt-packet-correlation-data-property/standard/standard-mqtt-packet-correlation-data-property.type';
import {
  IStandardMqttPacketWillDelayIntervalProperty,
} from '../../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/24-mqtt-packet-will-delay-interval-property/standard/standard-mqtt-packet-will-delay-interval-property.type';
import {
  IStandardMqttPacketUserProperties,
} from '../../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/standard/standard-mqtt-packet-user-properties.type';

export interface IStandardMqttConnectPacketWillProperties extends //
  Partial<IStandardMqttPacketWillDelayIntervalProperty>,
  Partial<IStandardMqttPacketPayloadFormatIndicatorProperty>,
  Partial<IStandardMqttPacketMessageExpiryIntervalProperty>,
  Partial<IStandardMqttPacketContentTypeProperty>,
  Partial<IStandardMqttPacketResponseTopicProperty>,
  Partial<IStandardMqttPacketCorrelationDataProperty>,
  Partial<IStandardMqttPacketUserProperties>
//
{

}
