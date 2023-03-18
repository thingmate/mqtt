import { isCustomError } from '@lirx/utils';
import { IPublishErrorName, PUBLISH_ERROR_NAME } from './publish-error-name.constant';
import { IPublishError, IPublishErrorProperties } from './publish-error.type';

export function isPublishError(
  value: unknown,
): value is IPublishError {
  return isCustomError<IPublishErrorName, IPublishErrorProperties>(
    value,
    PUBLISH_ERROR_NAME,
  );
}

