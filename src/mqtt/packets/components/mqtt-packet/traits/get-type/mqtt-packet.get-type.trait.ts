import { IMqttPacketGetTypeFunction } from './mqtt-packet.get-type.function-definition';

export interface IMqttPacketGetTypeTrait<GType extends number> {
  getType: IMqttPacketGetTypeFunction<GType>;
}
