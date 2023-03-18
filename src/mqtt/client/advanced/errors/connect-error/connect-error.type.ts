import { ICustomError, ICustomErrorMessageOptionalOptions } from '@lirx/utils';
import {
  CONNACK_REASON_CODE,
} from '../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/02-connack/connack-reason-code.enum';
import { IConnectErrorName } from './connect-error-name.constant';

export interface IConnectErrorOptions extends ICustomErrorMessageOptionalOptions {
  reasonCode?: CONNACK_REASON_CODE;
}

export interface IConnectErrorProperties {
  readonly reasonCode: CONNACK_REASON_CODE | undefined;
}

export type IConnectError = ICustomError<IConnectErrorName, IConnectErrorProperties>;


