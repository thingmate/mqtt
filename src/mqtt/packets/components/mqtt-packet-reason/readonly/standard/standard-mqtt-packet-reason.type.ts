export interface IStandardMqttPacketReason<GCode extends number> {
  readonly code: GCode;
  readonly message: string;
}
