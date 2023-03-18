import { createCustomError } from '@lirx/utils';
import { CONNECT_ERROR_NAME, IConnectErrorName } from './connect-error-name.constant';
import { IConnectError, IConnectErrorOptions, IConnectErrorProperties } from './connect-error.type';

export function createConnectError(
  options?: IConnectErrorOptions,
): IConnectError {
  return createCustomError<IConnectErrorName, IConnectErrorProperties>({
    name: CONNECT_ERROR_NAME,
    message: 'Failed to connect',
    reasonCode: void 0,
    ...options,
  });
}


