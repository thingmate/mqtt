import { IMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IMqttPubrelPacketType } from '../constants/mqtt-pubrel-packet-type.constant';
import { IReadonlyMqttPubrelPacketGetPacketIdTrait } from './traits/get-packet-id/readonly-mqtt-pubrel-packet.get-packet-id.trait';
import { IReadonlyMqttPubrelPacketGetPropertiesTrait } from './traits/get-properties/readonly-mqtt-pubrel-packet.get-properties.trait';
import { IReadonlyMqttPubrelPacketGetReasonTrait } from './traits/get-reason/readonly-mqtt-pubrel-packet.get-reason.trait';

// https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901141

// https://github.com/mqttjs/mqtt-packet/blob/aae4e2ca077ebf57f5fd7e96c65e73c4a9677c24/writeToStream.js#L378

export interface IReadonlyMqttPubrelPacket extends IMqttPacket<IMqttPubrelPacketType>,//
  IReadonlyMqttPubrelPacketGetPacketIdTrait,
  IReadonlyMqttPubrelPacketGetReasonTrait,
  IReadonlyMqttPubrelPacketGetPropertiesTrait
//
{

}
