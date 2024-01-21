import { ICustomError, ICustomErrorMessageOptionalOptions } from '@lirx/utils';
import {
  DISCONNECT_REASON_CODE,
} from '../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/14-disconnect/disconnect-reason-code.enum';
import { IDisconnectErrorName } from './disconnect-error-name.constant';

export interface IDisconnectErrorOptions extends ICustomErrorMessageOptionalOptions {
  readonly reasonCode?: DISCONNECT_REASON_CODE;
}

export interface IDisconnectErrorProperties {
  readonly reasonCode: DISCONNECT_REASON_CODE | undefined;
}

export type IDisconnectError = ICustomError<IDisconnectErrorName, IDisconnectErrorProperties>;
