import { IMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IMqttPubcompPacketType } from '../constants/mqtt-pubcomp-packet-type.constant';
import { IReadonlyMqttPubcompPacketGetPacketIdTrait } from './traits/get-packet-id/readonly-mqtt-pubcomp-packet.get-packet-id.trait';
import { IReadonlyMqttPubcompPacketGetPropertiesTrait } from './traits/get-properties/readonly-mqtt-pubcomp-packet.get-properties.trait';
import { IReadonlyMqttPubcompPacketGetReasonTrait } from './traits/get-reason/readonly-mqtt-pubcomp-packet.get-reason.trait';

// https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901121

// https://github.com/mqttjs/mqtt-packet/blob/aae4e2ca077ebf57f5fd7e96c65e73c4a9677c24/writeToStream.js#L378

export interface IReadonlyMqttPubcompPacket extends IMqttPacket<IMqttPubcompPacketType>,//
  IReadonlyMqttPubcompPacketGetPacketIdTrait,
  IReadonlyMqttPubcompPacketGetReasonTrait,
  IReadonlyMqttPubcompPacketGetPropertiesTrait
//
{

}
