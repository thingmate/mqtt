import { isCustomError } from '@lirx/utils';
import { CONNECT_ERROR_NAME, IConnectErrorName } from './connect-error-name.constant';
import { IConnectError, IConnectErrorProperties } from './connect-error.type';

export function isConnectError(
  value: unknown,
): value is IConnectError {
  return isCustomError<IConnectErrorName, IConnectErrorProperties>(
    value,
    CONNECT_ERROR_NAME,
  );
}

