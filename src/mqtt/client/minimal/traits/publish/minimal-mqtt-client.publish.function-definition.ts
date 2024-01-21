import { Abortable, AsyncTask } from '@lirx/async-task';
import {
  IStringOrUint8Array,
} from '../../../../packets/components/mqtt-packet-payload/readonly/implementations/create-readonly-mqtt-packet-payload-from-string-or-uint8-array';

export interface IMinimalMqttClientPublishFunction {
  (
    topic: string,
    payload: IStringOrUint8Array,
    abortable: Abortable,
  ): AsyncTask<void>;
}
