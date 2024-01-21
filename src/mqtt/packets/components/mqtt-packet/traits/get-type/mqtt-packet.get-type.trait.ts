import { IMqttPacketGetTypeFunction } from './mqtt-packet.get-type.function-definition';

export interface IMqttPacketGetTypeTrait<GType extends number> {
  readonly getType: IMqttPacketGetTypeFunction<GType>;
}
