import { createCustomError } from '@lirx/utils';
import { IPublishErrorName, PUBLISH_ERROR_NAME } from './publish-error-name.constant';
import { IPublishError, IPublishErrorOptions, IPublishErrorProperties } from './publish-error.type';

export function createPublishError(
  options?: IPublishErrorOptions,
): IPublishError {
  return createCustomError<IPublishErrorName, IPublishErrorProperties>({
    name: PUBLISH_ERROR_NAME,
    message: 'Failed to publish',
    reasonCode: void 0,
    ...options,
  });
}


