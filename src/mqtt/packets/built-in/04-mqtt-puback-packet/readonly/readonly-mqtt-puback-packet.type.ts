import { IMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IMqttPubackPacketType } from '../constants/mqtt-puback-packet-type.constant';
import { IReadonlyMqttPubackPacketGetPacketIdTrait } from './traits/get-packet-id/readonly-mqtt-puback-packet.get-packet-id.trait';
import { IReadonlyMqttPubackPacketGetPropertiesTrait } from './traits/get-properties/readonly-mqtt-puback-packet.get-properties.trait';
import { IReadonlyMqttPubackPacketGetReasonTrait } from './traits/get-reason/readonly-mqtt-puback-packet.get-reason.trait';

// https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901121

// https://github.com/mqttjs/mqtt-packet/blob/aae4e2ca077ebf57f5fd7e96c65e73c4a9677c24/writeToStream.js#L378

export interface IReadonlyMqttPubackPacket extends IMqttPacket<IMqttPubackPacketType>,//
  IReadonlyMqttPubackPacketGetPacketIdTrait,
  IReadonlyMqttPubackPacketGetReasonTrait,
  IReadonlyMqttPubackPacketGetPropertiesTrait
//
{

}
