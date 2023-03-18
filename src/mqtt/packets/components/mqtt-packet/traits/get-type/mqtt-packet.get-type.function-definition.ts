export interface IMqttPacketGetTypeFunction<GType extends number> {
  (): GType;
}
