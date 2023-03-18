import { createCustomError } from '@lirx/utils';
import { IUnsubscribeErrorName, UNSUBSCRIBE_ERROR_NAME } from './unsubscribe-error-name.constant';
import { IUnsubscribeError, IUnsubscribeErrorOptions, IUnsubscribeErrorProperties } from './unsubscribe-error.type';

export function createUnsubscribeError(
  options?: IUnsubscribeErrorOptions,
): IUnsubscribeError {
  return createCustomError<IUnsubscribeErrorName, IUnsubscribeErrorProperties>({
    name: UNSUBSCRIBE_ERROR_NAME,
    message: 'Failed to unsubscribe',
    reasonCode: void 0,
    ...options,
  });
}


