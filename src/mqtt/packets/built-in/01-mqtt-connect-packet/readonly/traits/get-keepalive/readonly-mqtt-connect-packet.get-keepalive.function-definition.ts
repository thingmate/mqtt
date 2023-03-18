import { u16 } from '@lifaon/number-types';

export interface IReadonlyMqttConnectPacketGetKeepaliveFunction {
  (): u16;
}
