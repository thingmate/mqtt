export type IStandardMqttPacketProperty<GName extends string, GValue> = Record<GName, GValue>;

export type IGenericStandardMqttPacketProperty = IStandardMqttPacketProperty<any, any>;
