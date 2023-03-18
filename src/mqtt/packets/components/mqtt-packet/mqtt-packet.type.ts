import { IMqttPacketGetTypeTrait } from './traits/get-type/mqtt-packet.get-type.trait';

export interface IMqttPacket<GType extends number> extends //
  IMqttPacketGetTypeTrait<GType>
//
{

}

export type IGenericMqttPacket = IMqttPacket<any>;
