import {
  Abortable,
  AsyncTask,
  IAsyncTaskConstraint,
  IAsyncTaskErrorFunction,
  IAsyncTaskSuccessFunction,
  AbortableController,
  ASYNC_TASK_SUCCESS,
  IAsyncTaskInput,
  IAsyncTaskResolvedState,
} from '@lirx/async-task';
import { IPushSourceWithBackPressure } from '@lirx/stream';
import { cleanUnsubscribeSet, IUnsubscribeSet, unsubscribeSet } from '@lirx/unsubscribe';

export interface IPushSourceWithBackPressureToAsyncTaskOnValueFunction<GIn, GOut extends IAsyncTaskConstraint<GOut>> {
  (
    value: GIn,
    success: IAsyncTaskSuccessFunction<GOut>,
    error: IAsyncTaskErrorFunction,
    abortable: Abortable,
  ): AsyncTask<void>;
}

export function pushSourceWithBackPressureToAsyncTask<GIn, GOut extends IAsyncTaskConstraint<GOut>>(
  onValue: IPushSourceWithBackPressureToAsyncTaskOnValueFunction<GIn, GOut>,
  input$: IPushSourceWithBackPressure<GIn>,
  abortable: Abortable,
): AsyncTask<GOut> {
  return new AsyncTask<GOut>((
    _success: IAsyncTaskSuccessFunction<GOut>,
    _error: IAsyncTaskErrorFunction,
    abortable: Abortable,
  ): void => {
    const toUnsubscribe: IUnsubscribeSet = unsubscribeSet();

    const clean = (): void => {
      cleanUnsubscribeSet(toUnsubscribe);
    };

    const sharedAbortableController: AbortableController = new AbortableController([abortable]);
    const sharedAbortable: Abortable = sharedAbortableController.abortable;

    const success = (
      value: IAsyncTaskInput<GOut>,
    ): void => {
      sharedAbortableController.abort(ASYNC_TASK_SUCCESS);
      _success(value);
    };

    const error = (
      error: any,
    ): void => {
      sharedAbortableController.abort(error);
      _error(error);
    };

    toUnsubscribe.add(sharedAbortable.onAbort(clean));

    const task: AsyncTask<void> = input$(
      (
        value: GIn,
        abortable: Abortable,
      ): AsyncTask<void> => {
        return onValue(
          value,
          success,
          error,
          abortable,
        );
      },
      sharedAbortable,
    );

    toUnsubscribe.add(
      AsyncTask.whenResolved(task, (
        state: IAsyncTaskResolvedState<void>,
      ): void => {
        if (state.state === 'success') {
          error(new Error('Finished before complete'));
        } else if (state.state === 'error') {
          error(state.error);
        } else if (state.state === 'abort') {
          error(new Error('Aborted before complete'));
        }
      }),
    );
  }, abortable);
}

/*
return pushSourceWithBackPressureToAsyncTask((
            packet: IGenericMqttPacket,
            success: ISuccessFunction<IReadonlyMqttConnackPacket>,
            error: IErrorFunction,
            abortable: Abortable,
          ): AsyncTask<void> => {

          }, input$, abortable);
 */
