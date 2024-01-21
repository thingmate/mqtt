import { ICustomError, ICustomErrorMessageOptionalOptions } from '@lirx/utils';
import {
  UNSUBACK_REASON_CODE,
} from '../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/11-unsuback/unsuback-reason-code.enum';
import { IUnsubscribeErrorName } from './unsubscribe-error-name.constant';

export interface IUnsubscribeErrorOptions extends ICustomErrorMessageOptionalOptions {
  readonly reasonCode?: UNSUBACK_REASON_CODE;
}

export interface IUnsubscribeErrorProperties {
  readonly reasonCode: UNSUBACK_REASON_CODE | undefined;
}

export type IUnsubscribeError = ICustomError<IUnsubscribeErrorName, IUnsubscribeErrorProperties>;


