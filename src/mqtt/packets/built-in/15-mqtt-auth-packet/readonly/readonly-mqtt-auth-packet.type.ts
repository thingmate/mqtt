import { IMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IMqttAuthPacketType } from '../constants/mqtt-auth-packet-type.constant';
import { IReadonlyMqttAuthPacketGetPropertiesTrait } from './traits/get-properties/readonly-mqtt-auth-packet.get-properties.trait';
import { IReadonlyMqttAuthPacketGetReasonTrait } from './traits/get-reason/readonly-mqtt-auth-packet.get-reason.trait';

// https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901217

// https://github.com/mqttjs/mqtt-packet/blob/aae4e2ca077ebf57f5fd7e96c65e73c4a9677c24/writeToStream.js#L752

export interface IReadonlyMqttAuthPacket extends IMqttPacket<IMqttAuthPacketType>,//
  IReadonlyMqttAuthPacketGetReasonTrait,
  IReadonlyMqttAuthPacketGetPropertiesTrait
//
{

}
