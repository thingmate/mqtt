import { IMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IMqttPubrecPacketType } from '../constants/mqtt-pubrec-packet-type.constant';
import { IReadonlyMqttPubrecPacketGetPacketIdTrait } from './traits/get-packet-id/readonly-mqtt-pubrec-packet.get-packet-id.trait';
import { IReadonlyMqttPubrecPacketGetPropertiesTrait } from './traits/get-properties/readonly-mqtt-pubrec-packet.get-properties.trait';
import { IReadonlyMqttPubrecPacketGetReasonTrait } from './traits/get-reason/readonly-mqtt-pubrec-packet.get-reason.trait';

// https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901131

// https://github.com/mqttjs/mqtt-packet/blob/aae4e2ca077ebf57f5fd7e96c65e73c4a9677c24/writeToStream.js#L378

export interface IReadonlyMqttPubrecPacket extends IMqttPacket<IMqttPubrecPacketType>,//
  IReadonlyMqttPubrecPacketGetPacketIdTrait,
  IReadonlyMqttPubrecPacketGetReasonTrait,
  IReadonlyMqttPubrecPacketGetPropertiesTrait
//
{

}
