import { IMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IMqttSubscribePacketType } from '../constants/mqtt-subscribe-packet-type.constant';
import { IReadonlyMqttSubscribePacketGetPacketIdTrait } from './traits/get-packet-id/readonly-mqtt-subscribe-packet.get-packet-id.trait';
import {
  IReadonlyMqttSubscribePacketGetPropertiesTrait,
} from './traits/get-properties/readonly-mqtt-subscribe-packet.get-properties.trait';
import {
  IReadonlyMqttSubscribePacketGetSubscriptionsTrait,
} from './traits/get-subscriptions/readonly-mqtt-subscribe-packet.get-subscriptions.trait';

// https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901161

// https://github.com/mqttjs/mqtt-packet/blob/aae4e2ca077ebf57f5fd7e96c65e73c4a9677c24/writeToStream.js#L315

export interface IReadonlyMqttSubscribePacket extends IMqttPacket<IMqttSubscribePacketType>,//
  IReadonlyMqttSubscribePacketGetPacketIdTrait,
  IReadonlyMqttSubscribePacketGetPropertiesTrait,
  IReadonlyMqttSubscribePacketGetSubscriptionsTrait
//
{

}
