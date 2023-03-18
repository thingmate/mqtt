import { IReadonlyMqttPacketReason } from '../readonly-mqtt-packet-reason.type';

export interface IReadonlyMqttPacketReasonContext<GCode extends number> {
  code: GCode;
  message: string;
}

export function createReadonlyMqttPacketReason<GCode extends number>(
  context: IReadonlyMqttPacketReasonContext<GCode>,
): IReadonlyMqttPacketReason<GCode> {
  const getCode = (): GCode => {
    return context.code;
  };

  const getMessage = (): string => {
    return context.message;
  };

  const toString = getMessage;

  return {
    getCode,
    getMessage,
    toString,
  };
}



