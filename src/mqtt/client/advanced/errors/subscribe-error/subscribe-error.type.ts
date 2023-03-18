import { ICustomError, ICustomErrorMessageOptionalOptions } from '@lirx/utils';
import {
  SUBACK_REASON_CODE,
} from '../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/09-suback/suback-reason-code.enum';
import { ISubscribeErrorName } from './subscribe-error-name.constant';

export interface ISubscribeErrorOptions extends ICustomErrorMessageOptionalOptions {
  reasonCode?: SUBACK_REASON_CODE;
}

export interface ISubscribeErrorProperties {
  readonly reasonCode: SUBACK_REASON_CODE | undefined;
}

export type ISubscribeError = ICustomError<ISubscribeErrorName, ISubscribeErrorProperties>;


