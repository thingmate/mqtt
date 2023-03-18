import { ICustomError, ICustomErrorMessageOptionalOptions } from '@lirx/utils';
import {
  PUBACK_REASON_CODE,
} from '../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/04-puback/puback-reason-code.enum';
import {
  PUBREC_REASON_CODE,
} from '../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/05-pubrec/pubrec-reason-code.enum';
import {
  PUBCOMP_REASON_CODE,
} from '../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/07-pubcomp/pubcomp-reason-code.enum';
import { IPublishErrorName } from './publish-error-name.constant';

export type IPublishReasonCode =
  | PUBACK_REASON_CODE
  | PUBREC_REASON_CODE
  | PUBCOMP_REASON_CODE
  ;

export interface IPublishErrorOptions extends ICustomErrorMessageOptionalOptions {
  reasonCode?: IPublishReasonCode;
}

export interface IPublishErrorProperties {
  readonly reasonCode: IPublishReasonCode | undefined;
}

export type IPublishError = ICustomError<IPublishErrorName, IPublishErrorProperties>;


