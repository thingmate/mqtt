import { IMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IMqttUnsubscribePacketType } from '../constants/mqtt-unsubscribe-packet-type.constant';
import {
  IReadonlyMqttUnsubscribePacketGetPacketIdTrait,
} from './traits/get-packet-id/readonly-mqtt-unsubscribe-packet.get-packet-id.trait';
import {
  IReadonlyMqttUnsubscribePacketGetPropertiesTrait,
} from './traits/get-properties/readonly-mqtt-unsubscribe-packet.get-properties.trait';
import {
  IReadonlyMqttUnsubscribePacketGetUnsubscriptionsTrait,
} from './traits/get-unsubscriptions/readonly-mqtt-unsubscribe-packet.get-unsubscriptions.trait';

// https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901179

// https://github.com/mqttjs/mqtt-packet/blob/aae4e2ca077ebf57f5fd7e96c65e73c4a9677c24/writeToStream.js#L590

export interface IReadonlyMqttUnsubscribePacket extends IMqttPacket<IMqttUnsubscribePacketType>,//
  IReadonlyMqttUnsubscribePacketGetPacketIdTrait,
  IReadonlyMqttUnsubscribePacketGetPropertiesTrait,
  IReadonlyMqttUnsubscribePacketGetUnsubscriptionsTrait
//
{

}
