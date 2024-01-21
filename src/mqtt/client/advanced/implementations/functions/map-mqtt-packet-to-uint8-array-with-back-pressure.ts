import { u8 } from '@lifaon/number-types';
import { Abortable, AsyncTask } from '@lirx/async-task';
import { IPurePushSinkWithBackPressure } from '@lirx/stream';
import { IMqttProtocolVersion } from '../../../../constants/mqtt-protocol-version.type';
import {
  createByteIteratorEncoderForMqttPacket,
} from '../../../../packets/components/mqtt-packet/implementations/functions/create-byte-iterator-encoder-for-mqtt-packet';
import {
  generateGetExtraArgumentsFunctionForMqttPacketByteIteratorEncoder,
} from '../../../../packets/components/mqtt-packet/implementations/functions/extra-arguments/generate-get-extra-arguments-function-for-mqtt-packet-byte-iterator-encoder';
import { IGenericMqttPacket } from '../../../../packets/components/mqtt-packet/mqtt-packet.type';

export interface IMapMqttPacketToUint8ArrayWithBackPressureOptions {
  readonly protocolVersion: IMqttProtocolVersion;
}

export function mapMqttPacketToUint8ArrayWithBackPressure(
  sink: IPurePushSinkWithBackPressure<Uint8Array>,
  {
    protocolVersion,
  }: IMapMqttPacketToUint8ArrayWithBackPressureOptions,
): IPurePushSinkWithBackPressure<IGenericMqttPacket> {
  return (
    value: IGenericMqttPacket,
    abortable: Abortable,
  ): AsyncTask<void> => {
    return sink(
      transformMqttPacketToUint8Array(value, protocolVersion),
      abortable,
    );
  };
}

/*----------*/

const AVERAGE_MQTT_PACKET_SIZE = 8192; // 2**13 => 8KB
const MAX_MQTT_PACKET_SIZE = 268435456; // 2**28 => 256MB

function transformMqttPacketToUint8Array(
  packet: IGenericMqttPacket,
  protocolVersion: IMqttProtocolVersion,
  buffer: Uint8Array = new Uint8Array(AVERAGE_MQTT_PACKET_SIZE),
): Uint8Array {
  const getExtraArguments = generateGetExtraArgumentsFunctionForMqttPacketByteIteratorEncoder(() => protocolVersion);

  const encoder = createByteIteratorEncoderForMqttPacket(packet, getExtraArguments);

  // const buffer: Uint8Array = new Uint8Array(2**28); // 256MB
  let i: number = 0;
  let result: IteratorResult<u8, void>;
  while (!(result = encoder.next()).done) {
    if (i >= buffer.length) {
      if (i >= MAX_MQTT_PACKET_SIZE) {
        throw new Error(`MQTT packet is too big.`);
      } else {
        return transformMqttPacketToUint8Array(
          packet,
          protocolVersion,
          new Uint8Array(MAX_MQTT_PACKET_SIZE),
        );
      }
    }
    buffer[i++] = result.value;
  }

  return buffer.subarray(0, i);
}
