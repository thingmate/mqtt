import { Abortable, AsyncTask } from '@lirx/async-task';
import { IPushPipeWithBackPressure, IPushSinkWithBackPressure, IPushSourceWithBackPressure } from '@lirx/stream';
import { IByteIteratorDecoder } from '../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../constants/mqtt-protocol-version.type';
import {
  createByteIteratorDecoderForMqttPacket,
} from '../../../../packets/components/mqtt-packet/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet';
import {
  generateGetExtraArgumentsFunctionForMqttPacketByteIteratorDecoder,
} from '../../../../packets/components/mqtt-packet/implementations/functions/extra-arguments/generate-get-extra-arguments-function-for-mqtt-packet-byte-iterator-decoder';
import { IGenericMqttPacket } from '../../../../packets/components/mqtt-packet/mqtt-packet.type';

export interface IMapArrayBufferToMqttPacketWithBackPressureOptions {
  protocolVersion: IMqttProtocolVersion,
}

export function mapArrayBufferToMqttPacketWithBackPressure(
  source: IPushSourceWithBackPressure<ArrayBuffer>,
  {
    protocolVersion,
  }: IMapArrayBufferToMqttPacketWithBackPressureOptions,
): IPushSourceWithBackPressure<IGenericMqttPacket> {
  return (
    sink: IPushSinkWithBackPressure<IGenericMqttPacket>,
    abortable: Abortable,
  ): AsyncTask<void> => {
    const getExtraArguments = generateGetExtraArgumentsFunctionForMqttPacketByteIteratorDecoder(() => protocolVersion);

    let decoder: IByteIteratorDecoder<IGenericMqttPacket>;

    const nextDecoder = () => {
      decoder = createByteIteratorDecoderForMqttPacket(getExtraArguments);
      decoder.next();
    };

    nextDecoder();

    const loop = (
      bytes: Uint8Array,
      index: number,
      abortable: Abortable,
    ): AsyncTask<void> => {
      const length = bytes.length;
      while (index < length) {
        const result: IteratorResult<void, IGenericMqttPacket> = decoder.next(bytes[index]);
        index++;
        if (result.done) {
          nextDecoder();
          return sink(result.value, abortable)
            .successful((): AsyncTask<void> => {
              return loop(
                bytes,
                index,
                abortable,
              );
            });
        }
      }
      return AsyncTask.void(abortable);
    };

    return source((
      value: ArrayBuffer,
      abortable: Abortable,
    ): AsyncTask<void> => {
      return loop(
        new Uint8Array(value),
        0,
        abortable,
      );
    }, abortable);
  };
}

export function createMapArrayBufferToMqttPacketWithBackPressure(
  options: IMapArrayBufferToMqttPacketWithBackPressureOptions,
): IPushPipeWithBackPressure<ArrayBuffer, IGenericMqttPacket> {
  return (
    source: IPushSourceWithBackPressure<ArrayBuffer>,
  ): IPushSourceWithBackPressure<IGenericMqttPacket> => {
    return mapArrayBufferToMqttPacketWithBackPressure(source, options);
  };
}
