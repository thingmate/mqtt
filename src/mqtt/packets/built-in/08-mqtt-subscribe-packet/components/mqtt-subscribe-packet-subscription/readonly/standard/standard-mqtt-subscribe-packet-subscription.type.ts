import { QOS } from '../../../../../../../constants/qos.enum';
import {
  MQTT_SUBSCRIBE_PACKET_SUBSCRIPTION_RETAIN_HANDLING,
} from '../traits/get-retain-handling/mqtt-subscribe-packet-subscription-retain-handling.enum';

export interface IStandardMqttSubscribePacketSubscription {
  readonly topic: string;
  readonly qos: QOS;
  readonly noLocal: boolean; // V5
  readonly retainAsPublished: boolean; // V5
  readonly retainHandling: MQTT_SUBSCRIBE_PACKET_SUBSCRIPTION_RETAIN_HANDLING; // V5
}
