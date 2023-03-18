import { AUTH_REASON_CODE } from './auth-reason-code.enum';

export function authReasonCodeToMessage(
  reasonCode: AUTH_REASON_CODE,
): string {
  switch (reasonCode) {
    case AUTH_REASON_CODE.SUCCESS:
      return `Success`;
    case AUTH_REASON_CODE.CONTINUE_AUTHENTICATION:
      return `Continue authentication`;
    case AUTH_REASON_CODE.REAUTHENTICATE:
      return `Re-authenticate`;
    default:
      throw new Error(`Unknown code: ${reasonCode}`);
  }
}
