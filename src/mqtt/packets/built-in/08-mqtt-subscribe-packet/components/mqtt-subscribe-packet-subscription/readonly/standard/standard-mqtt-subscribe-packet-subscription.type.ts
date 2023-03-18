import { QOS } from '../../../../../../../constants/qos.enum';
import {
  MQTT_SUBSCRIBE_PACKET_SUBSCRIPTION_RETAIN_HANDLING,
} from '../traits/get-retain-handling/mqtt-subscribe-packet-subscription-retain-handling.enum';

export interface IStandardMqttSubscribePacketSubscription {
  topic: string;
  qos: QOS;
  noLocal: boolean; // V5
  retainAsPublished: boolean; // V5
  retainHandling: MQTT_SUBSCRIBE_PACKET_SUBSCRIPTION_RETAIN_HANDLING; // V5
}
