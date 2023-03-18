import { IMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IMqttDisconnectPacketType } from '../constants/mqtt-disconnect-packet-type.constant';
import {
  IReadonlyMqttDisconnectPacketGetPropertiesTrait,
} from './traits/get-properties/readonly-mqtt-disconnect-packet.get-properties.trait';
import { IReadonlyMqttDisconnectPacketGetReasonTrait } from './traits/get-reason/readonly-mqtt-disconnect-packet.get-reason.trait';

// https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901205

export interface IReadonlyMqttDisconnectPacket extends IMqttPacket<IMqttDisconnectPacketType>,//
  IReadonlyMqttDisconnectPacketGetReasonTrait,
  IReadonlyMqttDisconnectPacketGetPropertiesTrait
//
{

}
