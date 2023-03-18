import { IReadonlyMqttPacketPropertyGetCodeTrait } from './traits/get-code/readonly-mqtt-packet-property.get-code.trait';
import { IReadonlyMqttPacketPropertyGetNameTrait } from './traits/get-name/readonly-mqtt-packet-property.get-name.trait';
import { IReadonlyMqttPacketPropertyGetValueTrait } from './traits/get-value/readonly-mqtt-packet-property.get-value.trait';

export interface IReadonlyMqttPacketProperty<GCode extends number, GName extends string, GValue> extends //
  IReadonlyMqttPacketPropertyGetCodeTrait<GCode>,
  IReadonlyMqttPacketPropertyGetNameTrait<GName>,
  IReadonlyMqttPacketPropertyGetValueTrait<GValue>
//
{

}

export type IGenericReadonlyMqttPacketProperty = IReadonlyMqttPacketProperty<any, any, any>;
