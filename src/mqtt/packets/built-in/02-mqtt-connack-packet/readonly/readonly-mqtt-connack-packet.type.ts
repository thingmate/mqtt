import { IMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IMqttConnackPacketType } from '../constants/mqtt-connack-packet-type.constant';
import { IReadonlyMqttConnackPacketGetPropertiesTrait } from './traits/get-properties/readonly-mqtt-connack-packet.get-properties.trait';
import { IReadonlyMqttConnackPacketGetReasonTrait } from './traits/get-reason/readonly-mqtt-connack-packet.get-reason.trait';
import {
  IReadonlyMqttConnackPacketGetSessionPresentTrait,
} from './traits/get-session-present/readonly-mqtt-connack-packet.get-session-present.trait';

// https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901074

// https://github.com/mqttjs/mqtt-packet/blob/aae4e2ca077ebf57f5fd7e96c65e73c4a9677c24/writeToStream.js#L283

export interface IReadonlyMqttConnackPacket extends IMqttPacket<IMqttConnackPacketType>,//
  IReadonlyMqttConnackPacketGetSessionPresentTrait,
  IReadonlyMqttConnackPacketGetReasonTrait,
  IReadonlyMqttConnackPacketGetPropertiesTrait
//
{

}
