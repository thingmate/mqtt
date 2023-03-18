import {
  Abortable,
  AsyncTask,
  IAsyncTaskConstraint,
  IAsyncTaskErrorFunction,
  IAsyncTaskState,
  IAsyncTaskSuccessFunction,
} from '@lirx/async-task';
import { IPushSourceWithBackPressure } from '@lirx/stream';

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
  return AsyncTask.abortOnFinished<GOut>((
    success: IAsyncTaskSuccessFunction<GOut>,
    error: IAsyncTaskErrorFunction,
    abortable: Abortable,
  ): void => {
    input$((
      value: GIn,
      abortable: Abortable,
    ): AsyncTask<void> => {
      return onValue(
        value,
        success,
        error,
        abortable,
      );
    }, abortable)
      .finally((
        state: IAsyncTaskState<void>,
      ): void => {
        if (state.state === 'success') {
          error(new Error('Finished before complete'));
        } else if (state.state === 'error') {
          error(state.error);
        } else if (state.state === 'abort') {
          error(new Error('Aborted before complete'));
        }
      });
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
