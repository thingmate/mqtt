import { IMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IMqttSubackPacketType } from '../constants/mqtt-suback-packet-type.constant';
import { IReadonlyMqttSubackPacketGetPacketIdTrait } from './traits/get-packet-id/readonly-mqtt-suback-packet.get-packet-id.trait';
import { IReadonlyMqttSubackPacketGetPropertiesTrait } from './traits/get-properties/readonly-mqtt-suback-packet.get-properties.trait';
import { IReadonlyMqttSubackPacketGetReasonsTrait } from './traits/get-reasons/readonly-mqtt-suback-packet.get-reasons.trait';

// https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901171

// https://github.com/mqttjs/mqtt-packet/blob/aae4e2ca077ebf57f5fd7e96c65e73c4a9677c24/writeToStream.js#L537

export interface IReadonlyMqttSubackPacket extends IMqttPacket<IMqttSubackPacketType>,//
  IReadonlyMqttSubackPacketGetPacketIdTrait,
  IReadonlyMqttSubackPacketGetPropertiesTrait,
  IReadonlyMqttSubackPacketGetReasonsTrait
//
{

}
