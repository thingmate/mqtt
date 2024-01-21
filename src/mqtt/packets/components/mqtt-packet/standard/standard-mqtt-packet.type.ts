export interface IStandardMqttPacket<GType extends number> {
  readonly type: GType;
}

export type IGenericStandardMqttPacket = IStandardMqttPacket<any>;
