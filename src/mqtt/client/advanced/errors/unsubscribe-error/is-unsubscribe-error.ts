import { isCustomError } from '@lirx/utils';
import { IUnsubscribeErrorName, UNSUBSCRIBE_ERROR_NAME } from './unsubscribe-error-name.constant';
import { IUnsubscribeError, IUnsubscribeErrorProperties } from './unsubscribe-error.type';

export function isUnsubscribeError(
  value: unknown,
): value is IUnsubscribeError {
  return isCustomError<IUnsubscribeErrorName, IUnsubscribeErrorProperties>(
    value,
    UNSUBSCRIBE_ERROR_NAME,
  );
}

