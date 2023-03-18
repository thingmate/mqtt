export interface IStandardMqttPacket<GType extends number> {
  type: GType;
}

export type IGenericStandardMqttPacket = IStandardMqttPacket<any>;
