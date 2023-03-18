import { SUBACK_REASON_CODE } from './suback-reason-code.enum';

export type ISuccessSubackReasonCode =
  | SUBACK_REASON_CODE.GRANTED_QOS_0
  | SUBACK_REASON_CODE.GRANTED_QOS_1
  | SUBACK_REASON_CODE.GRANTED_QOS_2
  ;

export function isSuccessSubackReasonCode(
  reasonCode: SUBACK_REASON_CODE,
): reasonCode is ISuccessSubackReasonCode {
  return (
    (reasonCode === SUBACK_REASON_CODE.GRANTED_QOS_0)
    || (reasonCode === SUBACK_REASON_CODE.GRANTED_QOS_1)
    || (reasonCode === SUBACK_REASON_CODE.GRANTED_QOS_2)
  );
}
