import { IMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IMqttUnsubackPacketType } from '../constants/mqtt-unsuback-packet-type.constant';
import { IReadonlyMqttUnsubackPacketGetPacketIdTrait } from './traits/get-packet-id/readonly-mqtt-unsuback-packet.get-packet-id.trait';
import { IReadonlyMqttUnsubackPacketGetPropertiesTrait } from './traits/get-properties/readonly-mqtt-unsuback-packet.get-properties.trait';
import { IReadonlyMqttUnsubackPacketGetReasonTrait } from './traits/get-reason/readonly-mqtt-unsuback-packet.get-reason.trait';

// https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901187

// https://github.com/mqttjs/mqtt-packet/blob/aae4e2ca077ebf57f5fd7e96c65e73c4a9677c24/writeToStream.js#L651

export interface IReadonlyMqttUnsubackPacket extends IMqttPacket<IMqttUnsubackPacketType>,//
  IReadonlyMqttUnsubackPacketGetPacketIdTrait,
  IReadonlyMqttUnsubackPacketGetPropertiesTrait,
  IReadonlyMqttUnsubackPacketGetReasonTrait
//
{

}
