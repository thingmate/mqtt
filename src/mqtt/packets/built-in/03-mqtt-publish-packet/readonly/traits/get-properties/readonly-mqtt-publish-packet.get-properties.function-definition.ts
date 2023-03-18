import {
  IMqttPacketPayloadFormatIndicatorProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/01-mqtt-packet-payload-format-indicator-property/mqtt-packet-payload-format-indicator-property.type';
import {
  IMqttPacketMessageExpiryIntervalProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/02-mqtt-packet-message-expiry-interval-property/mqtt-packet-message-expiry-interval-property.type';
import {
  IMqttPacketContentTypeProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/03-mqtt-packet-content-type-property/mqtt-packet-content-type-property.type';
import {
  IMqttPacketResponseTopicProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/08-mqtt-packet-response-topic-property/mqtt-packet-response-topic-property.type';
import {
  IMqttPacketCorrelationDataProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/09-mqtt-packet-correlation-data-property/mqtt-packet-correlation-data-property.type';
import {
  IMqttPacketSubscriptionIdentifierProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/11-mqtt-packet-subscription-identifier-property/mqtt-packet-subscription-identifier-property.type';
import {
  IMqttPacketTopicAliasProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/35-mqtt-packet-topic-alias-property/mqtt-packet-topic-alias-property.type';
import {
  IMqttPacketUserProperty,
} from '../../../../../components/mqtt-packet-property-list/components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/mqtt-packet-user-property.type';
import {
  IReadonlyMqttPacketPropertyList,
} from '../../../../../components/mqtt-packet-property-list/readonly/readonly-mqtt-packet-property-list.type';

export type IReadonlyMqttPublishPacketProperties =
  | IMqttPacketPayloadFormatIndicatorProperty
  | IMqttPacketMessageExpiryIntervalProperty
  | IMqttPacketContentTypeProperty
  | IMqttPacketResponseTopicProperty
  | IMqttPacketCorrelationDataProperty
  | IMqttPacketTopicAliasProperty
  | IMqttPacketUserProperty
  | IMqttPacketSubscriptionIdentifierProperty
  ;

export type IReadonlyMqttPublishPacketPropertyList = IReadonlyMqttPacketPropertyList<IReadonlyMqttPublishPacketProperties>;

export interface IReadonlyMqttPublishPacketGetPropertiesFunction {
  (): IReadonlyMqttPublishPacketPropertyList;
}
