export interface IStandardMqttPacketReason<GCode extends number> {
  code: GCode;
  message: string;
}
