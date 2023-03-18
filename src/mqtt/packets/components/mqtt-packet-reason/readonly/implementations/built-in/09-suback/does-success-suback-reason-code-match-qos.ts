import { QOS } from '../../../../../../../constants/qos.enum';
import { ISuccessSubackReasonCode } from './is-success-suback-reason-code';
import { SUBACK_REASON_CODE } from './suback-reason-code.enum';

export function doesSuccessSubackReasonCodeMatchQoS(
  reasonCode: ISuccessSubackReasonCode,
  qos: QOS,
): boolean {
  return (
    (reasonCode === SUBACK_REASON_CODE.GRANTED_QOS_2)
    || ((reasonCode === SUBACK_REASON_CODE.GRANTED_QOS_1) && ((qos === QOS.AT_MOST_ONCE) || (qos === QOS.AT_LEAST_ONCE)))
    || ((reasonCode === SUBACK_REASON_CODE.GRANTED_QOS_0) && (qos === QOS.AT_MOST_ONCE))

    // ((reasonCode === SUBACK_REASON_CODE.GRANTED_QOS_0) && (qos === QOS.AT_MOST_ONCE))
    // || ((reasonCode === SUBACK_REASON_CODE.GRANTED_QOS_1) && ((qos === QOS.AT_MOST_ONCE) || (qos === QOS.AT_LEAST_ONCE)))
    // // || ((reasonCode === SUBACK_REASON_CODE.GRANTED_QOS_2) && ((qos === QOS.AT_MOST_ONCE) || (qos === QOS.AT_LEAST_ONCE) || (qos === QOS.EXACTLY_LEAST_ONCE)))
    // || (reasonCode === SUBACK_REASON_CODE.GRANTED_QOS_2)
  );
}
