import { IByteIteratorDecoder } from '../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../constants/mqtt-protocol-version.type';
import { MQTT_CONNECT_PACKET_TYPE } from '../../../../built-in/01-mqtt-connect-packet/constants/mqtt-connect-packet-type.constant';
import {
  createByteIteratorDecoderForReadonlyMqttConnectPacketHavingFirstByte,
} from '../../../../built-in/01-mqtt-connect-packet/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-connect-packet-having-first-byte';
import { MQTT_CONNACK_PACKET_TYPE } from '../../../../built-in/02-mqtt-connack-packet/constants/mqtt-connack-packet-type.constant';
import {
  createByteIteratorDecoderForReadonlyMqttConnackPacketHavingFirstByte,
} from '../../../../built-in/02-mqtt-connack-packet/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-connack-packet-having-first-byte';
import { MQTT_PUBLISH_PACKET_TYPE } from '../../../../built-in/03-mqtt-publish-packet/constants/mqtt-publish-packet-type.constant';
import {
  createByteIteratorDecoderForReadonlyMqttPublishPacketHavingFirstByte,
} from '../../../../built-in/03-mqtt-publish-packet/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-publish-packet-having-first-byte';
import { MQTT_PUBACK_PACKET_TYPE } from '../../../../built-in/04-mqtt-puback-packet/constants/mqtt-puback-packet-type.constant';
import {
  createByteIteratorDecoderForReadonlyMqttPubackPacketHavingFirstByte,
} from '../../../../built-in/04-mqtt-puback-packet/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-puback-packet-having-first-byte';
import { MQTT_PUBREC_PACKET_TYPE } from '../../../../built-in/05-mqtt-pubrec-packet/constants/mqtt-pubrec-packet-type.constant';
import {
  createByteIteratorDecoderForReadonlyMqttPubrecPacketHavingFirstByte,
} from '../../../../built-in/05-mqtt-pubrec-packet/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-pubrec-packet-having-first-byte';
import { MQTT_PUBREL_PACKET_TYPE } from '../../../../built-in/06-mqtt-pubrel-packet/constants/mqtt-pubrel-packet-type.constant';
import {
  createByteIteratorDecoderForReadonlyMqttPubrelPacketHavingFirstByte,
} from '../../../../built-in/06-mqtt-pubrel-packet/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-pubrel-packet-having-first-byte';
import { MQTT_PUBCOMP_PACKET_TYPE } from '../../../../built-in/07-mqtt-pubcomp-packet/constants/mqtt-pubcomp-packet-type.constant';
import {
  createByteIteratorDecoderForReadonlyMqttPubcompPacketHavingFirstByte,
} from '../../../../built-in/07-mqtt-pubcomp-packet/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-pubcomp-packet-having-first-byte';
import { MQTT_SUBSCRIBE_PACKET_TYPE } from '../../../../built-in/08-mqtt-subscribe-packet/constants/mqtt-subscribe-packet-type.constant';
import {
  createByteIteratorDecoderForReadonlyMqttSubscribePacketHavingFirstByte,
} from '../../../../built-in/08-mqtt-subscribe-packet/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-subscribe-packet-having-first-byte';
import { MQTT_SUBACK_PACKET_TYPE } from '../../../../built-in/09-mqtt-suback-packet/constants/mqtt-suback-packet-type.constant';
import {
  createByteIteratorDecoderForReadonlyMqttSubackPacketHavingFirstByte,
} from '../../../../built-in/09-mqtt-suback-packet/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-suback-packet-having-first-byte';
import {
  MQTT_UNSUBSCRIBE_PACKET_TYPE,
} from '../../../../built-in/10-mqtt-unsubscribe-packet/constants/mqtt-unsubscribe-packet-type.constant';
import {
  createByteIteratorDecoderForReadonlyMqttUnsubscribePacketHavingFirstByte,
} from '../../../../built-in/10-mqtt-unsubscribe-packet/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-unsubscribe-packet-having-first-byte';
import { MQTT_UNSUBACK_PACKET_TYPE } from '../../../../built-in/11-mqtt-unsuback-packet/constants/mqtt-unsuback-packet-type.constant';
import {
  createByteIteratorDecoderForReadonlyMqttUnsubackPacketHavingFirstByte,
} from '../../../../built-in/11-mqtt-unsuback-packet/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-unsuback-packet-having-first-byte';
import { MQTT_PINGREQ_PACKET_TYPE } from '../../../../built-in/12-mqtt-pingreq-packet/constants/mqtt-pingreq-packet-type.constant';
import {
  createByteIteratorDecoderForMqttPingreqPacketHavingFirstByte,
} from '../../../../built-in/12-mqtt-pingreq-packet/implementations/functions/create-byte-iterator-decoder-for-mqtt-pingreq-packet-having-first-byte';
import { MQTT_PINGRESP_PACKET_TYPE } from '../../../../built-in/13-mqtt-pingresp-packet/constants/mqtt-pingresp-packet-type.constant';
import {
  createByteIteratorDecoderForMqttPingrespPacketHavingFirstByte,
} from '../../../../built-in/13-mqtt-pingresp-packet/implementations/functions/create-byte-iterator-decoder-for-mqtt-pingresp-packet-having-first-byte';
import { MQTT_DISCONNECT_PACKET_TYPE } from '../../../../built-in/14-mqtt-disconnect-packet/constants/mqtt-disconnect-packet-type.constant';
import {
  createByteIteratorDecoderForReadonlyMqttDisconnectPacketHavingFirstByte,
} from '../../../../built-in/14-mqtt-disconnect-packet/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-disconnect-packet-having-first-byte';
import { MQTT_AUTH_PACKET_TYPE } from '../../../../built-in/15-mqtt-auth-packet/constants/mqtt-auth-packet-type.constant';
import {
  createByteIteratorDecoderForReadonlyMqttAuthPacketHavingFirstByte,
} from '../../../../built-in/15-mqtt-auth-packet/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-auth-packet-having-first-byte';
import { IGenericMqttPacket } from '../../mqtt-packet.type';
import {
  IGetExtraArgumentsFunctionForMqttPacketByteIteratorDecoder,
} from './extra-arguments/get-extra-arguments-function-for-mqtt-packet-byte-iterator-decoder.type';

export function* createByteIteratorDecoderForMqttPacket(
  getExtraArguments: IGetExtraArgumentsFunctionForMqttPacketByteIteratorDecoder,
): IByteIteratorDecoder<IGenericMqttPacket> {
  const firstByte: number = yield;
  const type: number = ((firstByte & 0b11110000) >> 4);

  switch (type) {
    case MQTT_CONNECT_PACKET_TYPE:
      return (yield* createByteIteratorDecoderForReadonlyMqttConnectPacketHavingFirstByte(firstByte, ...getExtraArguments(type)));
    case MQTT_CONNACK_PACKET_TYPE:
      return (yield* createByteIteratorDecoderForReadonlyMqttConnackPacketHavingFirstByte(firstByte, ...getExtraArguments(type) as [IMqttProtocolVersion]));
    case MQTT_PUBLISH_PACKET_TYPE:
      return (yield* createByteIteratorDecoderForReadonlyMqttPublishPacketHavingFirstByte(firstByte, ...getExtraArguments(type) as [IMqttProtocolVersion]));
    case MQTT_PUBACK_PACKET_TYPE:
      return (yield* createByteIteratorDecoderForReadonlyMqttPubackPacketHavingFirstByte(firstByte, ...getExtraArguments(type) as [IMqttProtocolVersion]));
    case MQTT_PUBREC_PACKET_TYPE:
      return (yield* createByteIteratorDecoderForReadonlyMqttPubrecPacketHavingFirstByte(firstByte, ...getExtraArguments(type) as [IMqttProtocolVersion]));
    case MQTT_PUBREL_PACKET_TYPE:
      return (yield* createByteIteratorDecoderForReadonlyMqttPubrelPacketHavingFirstByte(firstByte, ...getExtraArguments(type) as [IMqttProtocolVersion]));
    case MQTT_PUBCOMP_PACKET_TYPE:
      return (yield* createByteIteratorDecoderForReadonlyMqttPubcompPacketHavingFirstByte(firstByte, ...getExtraArguments(type) as [IMqttProtocolVersion]));
    case MQTT_SUBSCRIBE_PACKET_TYPE:
      return (yield* createByteIteratorDecoderForReadonlyMqttSubscribePacketHavingFirstByte(firstByte, ...getExtraArguments(type) as [IMqttProtocolVersion]));
    case MQTT_SUBACK_PACKET_TYPE:
      return (yield* createByteIteratorDecoderForReadonlyMqttSubackPacketHavingFirstByte(firstByte, ...getExtraArguments(type) as [IMqttProtocolVersion]));
    case MQTT_UNSUBSCRIBE_PACKET_TYPE:
      return (yield* createByteIteratorDecoderForReadonlyMqttUnsubscribePacketHavingFirstByte(firstByte, ...getExtraArguments(type) as [IMqttProtocolVersion]));
    case MQTT_UNSUBACK_PACKET_TYPE:
      return (yield* createByteIteratorDecoderForReadonlyMqttUnsubackPacketHavingFirstByte(firstByte, ...getExtraArguments(type) as [IMqttProtocolVersion]));
    case MQTT_PINGREQ_PACKET_TYPE:
      return (yield* createByteIteratorDecoderForMqttPingreqPacketHavingFirstByte(firstByte, ...getExtraArguments(type) as [IMqttProtocolVersion]));
    case MQTT_PINGRESP_PACKET_TYPE:
      return (yield* createByteIteratorDecoderForMqttPingrespPacketHavingFirstByte(firstByte, ...getExtraArguments(type) as [IMqttProtocolVersion]));
    case MQTT_DISCONNECT_PACKET_TYPE:
      return (yield* createByteIteratorDecoderForReadonlyMqttDisconnectPacketHavingFirstByte(firstByte, ...getExtraArguments(type) as [IMqttProtocolVersion]));
    case MQTT_AUTH_PACKET_TYPE:
      return (yield* createByteIteratorDecoderForReadonlyMqttAuthPacketHavingFirstByte(firstByte, ...getExtraArguments(type) as [IMqttProtocolVersion]));
    default:
      throw new Error(`Unsupported packet's type: ${type}`);
  }
}

