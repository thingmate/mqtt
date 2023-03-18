import { u8 } from '@lifaon/number-types';
import { Abortable, AsyncTask } from '@lirx/async-task';
import { IPushSinkWithBackPressure } from '@lirx/stream';
import { IMqttProtocolVersion } from '../../../../constants/mqtt-protocol-version.type';
import {
  createByteIteratorEncoderForMqttPacket,
} from '../../../../packets/components/mqtt-packet/implementations/functions/create-byte-iterator-encoder-for-mqtt-packet';
import {
  generateGetExtraArgumentsFunctionForMqttPacketByteIteratorEncoder,
} from '../../../../packets/components/mqtt-packet/implementations/functions/extra-arguments/generate-get-extra-arguments-function-for-mqtt-packet-byte-iterator-encoder';
import { IGenericMqttPacket } from '../../../../packets/components/mqtt-packet/mqtt-packet.type';

export interface IMapMqttPacketToUint8ArrayWithBackPressureOptions {
  protocolVersion: IMqttProtocolVersion,
}

export function mapMqttPacketToUint8ArrayWithBackPressure(
  sink: IPushSinkWithBackPressure<Uint8Array>,
  {
    protocolVersion,
  }: IMapMqttPacketToUint8ArrayWithBackPressureOptions,
): IPushSinkWithBackPressure<IGenericMqttPacket> {
  return (
    value: IGenericMqttPacket,
    abortable: Abortable,
  ): AsyncTask<void> => {
    return AsyncTask.fromFactory((
      abortable: Abortable,
    ): AsyncTask<void> => {
      return sink(
        transformMqttPacketToUint8Array(value, protocolVersion),
        abortable,
      );
    }, abortable);
  };
}

/*----------*/

function transformMqttPacketToUint8Array(
  packet: IGenericMqttPacket,
  protocolVersion: IMqttProtocolVersion,
): Uint8Array {
  const getExtraArguments = generateGetExtraArgumentsFunctionForMqttPacketByteIteratorEncoder(() => protocolVersion);

  const encoder = createByteIteratorEncoderForMqttPacket(packet, getExtraArguments);

  const bytes: Uint8Array = new Uint8Array(2 ** 20); // 1MB
  let i: number = 0;
  let result: IteratorResult<u8, void>;
  while (!(result = encoder.next()).done) {
    // TODO better support of index overflow
    if (i >= bytes.length) {
      throw new Error(`Buffer overflow`);
    }
    bytes[i++] = result.value;
  }

  return bytes.subarray(0, i);
}
