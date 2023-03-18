import { IByteIteratorEncoder } from '../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttProtocolVersion } from '../../../../../constants/mqtt-protocol-version.type';
import { MQTT_CONNECT_PACKET_TYPE } from '../../../../built-in/01-mqtt-connect-packet/constants/mqtt-connect-packet-type.constant';
import {
  createByteIteratorEncoderForReadonlyMqttConnectPacket,
} from '../../../../built-in/01-mqtt-connect-packet/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-connect-packet';
import { IReadonlyMqttConnectPacket } from '../../../../built-in/01-mqtt-connect-packet/readonly/readonly-mqtt-connect-packet.type';
import { MQTT_CONNACK_PACKET_TYPE } from '../../../../built-in/02-mqtt-connack-packet/constants/mqtt-connack-packet-type.constant';
import {
  createByteIteratorEncoderForReadonlyMqttConnackPacket,
} from '../../../../built-in/02-mqtt-connack-packet/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-connack-packet';
import { IReadonlyMqttConnackPacket } from '../../../../built-in/02-mqtt-connack-packet/readonly/readonly-mqtt-connack-packet.type';
import { MQTT_PUBLISH_PACKET_TYPE } from '../../../../built-in/03-mqtt-publish-packet/constants/mqtt-publish-packet-type.constant';
import {
  createByteIteratorEncoderForReadonlyMqttPublishPacket,
} from '../../../../built-in/03-mqtt-publish-packet/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-publish-packet';
import { IReadonlyMqttPublishPacket } from '../../../../built-in/03-mqtt-publish-packet/readonly/readonly-mqtt-publish-packet.type';
import { MQTT_PUBACK_PACKET_TYPE } from '../../../../built-in/04-mqtt-puback-packet/constants/mqtt-puback-packet-type.constant';
import {
  createByteIteratorEncoderForReadonlyMqttPubackPacket,
} from '../../../../built-in/04-mqtt-puback-packet/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-puback-packet';
import { IReadonlyMqttPubackPacket } from '../../../../built-in/04-mqtt-puback-packet/readonly/readonly-mqtt-puback-packet.type';
import { MQTT_PUBREC_PACKET_TYPE } from '../../../../built-in/05-mqtt-pubrec-packet/constants/mqtt-pubrec-packet-type.constant';
import {
  createByteIteratorEncoderForReadonlyMqttPubrecPacket,
} from '../../../../built-in/05-mqtt-pubrec-packet/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-pubrec-packet';
import { IReadonlyMqttPubrecPacket } from '../../../../built-in/05-mqtt-pubrec-packet/readonly/readonly-mqtt-pubrec-packet.type';
import { MQTT_PUBREL_PACKET_TYPE } from '../../../../built-in/06-mqtt-pubrel-packet/constants/mqtt-pubrel-packet-type.constant';
import {
  createByteIteratorEncoderForReadonlyMqttPubrelPacket,
} from '../../../../built-in/06-mqtt-pubrel-packet/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-pubrel-packet';
import { IReadonlyMqttPubrelPacket } from '../../../../built-in/06-mqtt-pubrel-packet/readonly/readonly-mqtt-pubrel-packet.type';
import { MQTT_PUBCOMP_PACKET_TYPE } from '../../../../built-in/07-mqtt-pubcomp-packet/constants/mqtt-pubcomp-packet-type.constant';
import {
  createByteIteratorEncoderForReadonlyMqttPubcompPacket,
} from '../../../../built-in/07-mqtt-pubcomp-packet/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-pubcomp-packet';
import { IReadonlyMqttPubcompPacket } from '../../../../built-in/07-mqtt-pubcomp-packet/readonly/readonly-mqtt-pubcomp-packet.type';
import { MQTT_SUBSCRIBE_PACKET_TYPE } from '../../../../built-in/08-mqtt-subscribe-packet/constants/mqtt-subscribe-packet-type.constant';
import {
  createByteIteratorEncoderForReadonlyMqttSubscribePacket,
} from '../../../../built-in/08-mqtt-subscribe-packet/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-subscribe-packet';
import { IReadonlyMqttSubscribePacket } from '../../../../built-in/08-mqtt-subscribe-packet/readonly/readonly-mqtt-subscribe-packet.type';
import { MQTT_SUBACK_PACKET_TYPE } from '../../../../built-in/09-mqtt-suback-packet/constants/mqtt-suback-packet-type.constant';
import {
  createByteIteratorEncoderForReadonlyMqttSubackPacket,
} from '../../../../built-in/09-mqtt-suback-packet/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-suback-packet';
import { IReadonlyMqttSubackPacket } from '../../../../built-in/09-mqtt-suback-packet/readonly/readonly-mqtt-suback-packet.type';
import {
  MQTT_UNSUBSCRIBE_PACKET_TYPE,
} from '../../../../built-in/10-mqtt-unsubscribe-packet/constants/mqtt-unsubscribe-packet-type.constant';
import {
  createByteIteratorEncoderForReadonlyMqttUnsubscribePacket,
} from '../../../../built-in/10-mqtt-unsubscribe-packet/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-unsubscribe-packet';
import {
  IReadonlyMqttUnsubscribePacket,
} from '../../../../built-in/10-mqtt-unsubscribe-packet/readonly/readonly-mqtt-unsubscribe-packet.type';
import { MQTT_UNSUBACK_PACKET_TYPE } from '../../../../built-in/11-mqtt-unsuback-packet/constants/mqtt-unsuback-packet-type.constant';
import {
  createByteIteratorEncoderForReadonlyMqttUnsubackPacket,
} from '../../../../built-in/11-mqtt-unsuback-packet/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-unsuback-packet';
import { IReadonlyMqttUnsubackPacket } from '../../../../built-in/11-mqtt-unsuback-packet/readonly/readonly-mqtt-unsuback-packet.type';
import { MQTT_PINGREQ_PACKET_TYPE } from '../../../../built-in/12-mqtt-pingreq-packet/constants/mqtt-pingreq-packet-type.constant';
import {
  createByteIteratorEncoderForMqttPingreqPacket,
} from '../../../../built-in/12-mqtt-pingreq-packet/implementations/functions/create-byte-iterator-encoder-for-mqtt-pingreq-packet';
import { IMqttPingreqPacket } from '../../../../built-in/12-mqtt-pingreq-packet/mqtt-pingreq-packet.type';
import { MQTT_PINGRESP_PACKET_TYPE } from '../../../../built-in/13-mqtt-pingresp-packet/constants/mqtt-pingresp-packet-type.constant';
import {
  createByteIteratorEncoderForMqttPingrespPacket,
} from '../../../../built-in/13-mqtt-pingresp-packet/implementations/functions/create-byte-iterator-encoder-for-mqtt-pingresp-packet';
import { IMqttPingrespPacket } from '../../../../built-in/13-mqtt-pingresp-packet/mqtt-pingresp-packet.type';
import { MQTT_DISCONNECT_PACKET_TYPE } from '../../../../built-in/14-mqtt-disconnect-packet/constants/mqtt-disconnect-packet-type.constant';
import {
  createByteIteratorEncoderForReadonlyMqttDisconnectPacket,
} from '../../../../built-in/14-mqtt-disconnect-packet/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-disconnect-packet';
import {
  IReadonlyMqttDisconnectPacket,
} from '../../../../built-in/14-mqtt-disconnect-packet/readonly/readonly-mqtt-disconnect-packet.type';
import { MQTT_AUTH_PACKET_TYPE } from '../../../../built-in/15-mqtt-auth-packet/constants/mqtt-auth-packet-type.constant';
import {
  createByteIteratorEncoderForReadonlyMqttAuthPacket,
} from '../../../../built-in/15-mqtt-auth-packet/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-auth-packet';
import { IReadonlyMqttAuthPacket } from '../../../../built-in/15-mqtt-auth-packet/readonly/readonly-mqtt-auth-packet.type';

import { IGenericMqttPacket } from '../../mqtt-packet.type';
import {
  IGetExtraArgumentsFunctionForMqttPacketByteIteratorEncoder,
} from './extra-arguments/get-extra-arguments-function-for-mqtt-packet-byte-iterator-encoder.type';

export function createByteIteratorEncoderForMqttPacket(
  packet: IGenericMqttPacket,
  getExtraArguments: IGetExtraArgumentsFunctionForMqttPacketByteIteratorEncoder,
): IByteIteratorEncoder {
  const type: number = packet.getType();

  switch (type) {
    case MQTT_CONNECT_PACKET_TYPE:
      return createByteIteratorEncoderForReadonlyMqttConnectPacket(packet as IReadonlyMqttConnectPacket);
    case MQTT_CONNACK_PACKET_TYPE:
      return createByteIteratorEncoderForReadonlyMqttConnackPacket(packet as IReadonlyMqttConnackPacket, ...getExtraArguments(type) as [IMqttProtocolVersion]);
    case MQTT_PUBLISH_PACKET_TYPE:
      return createByteIteratorEncoderForReadonlyMqttPublishPacket(packet as IReadonlyMqttPublishPacket, ...getExtraArguments(type) as [IMqttProtocolVersion]);
    case MQTT_PUBACK_PACKET_TYPE:
      return createByteIteratorEncoderForReadonlyMqttPubackPacket(packet as IReadonlyMqttPubackPacket, ...getExtraArguments(type) as [IMqttProtocolVersion]);
    case MQTT_PUBREC_PACKET_TYPE:
      return createByteIteratorEncoderForReadonlyMqttPubrecPacket(packet as IReadonlyMqttPubrecPacket, ...getExtraArguments(type) as [IMqttProtocolVersion]);
    case MQTT_PUBREL_PACKET_TYPE:
      return createByteIteratorEncoderForReadonlyMqttPubrelPacket(packet as IReadonlyMqttPubrelPacket, ...getExtraArguments(type) as [IMqttProtocolVersion]);
    case MQTT_PUBCOMP_PACKET_TYPE:
      return createByteIteratorEncoderForReadonlyMqttPubcompPacket(packet as IReadonlyMqttPubcompPacket, ...getExtraArguments(type) as [IMqttProtocolVersion]);
    case MQTT_SUBSCRIBE_PACKET_TYPE:
      return createByteIteratorEncoderForReadonlyMqttSubscribePacket(packet as IReadonlyMqttSubscribePacket, ...getExtraArguments(type) as [IMqttProtocolVersion]);
    case MQTT_SUBACK_PACKET_TYPE:
      return createByteIteratorEncoderForReadonlyMqttSubackPacket(packet as IReadonlyMqttSubackPacket, ...getExtraArguments(type) as [IMqttProtocolVersion]);
    case MQTT_UNSUBSCRIBE_PACKET_TYPE:
      return createByteIteratorEncoderForReadonlyMqttUnsubscribePacket(packet as IReadonlyMqttUnsubscribePacket, ...getExtraArguments(type) as [IMqttProtocolVersion]);
    case MQTT_UNSUBACK_PACKET_TYPE:
      return createByteIteratorEncoderForReadonlyMqttUnsubackPacket(packet as IReadonlyMqttUnsubackPacket, ...getExtraArguments(type) as [IMqttProtocolVersion]);
    case MQTT_PINGREQ_PACKET_TYPE:
      return createByteIteratorEncoderForMqttPingreqPacket(packet as IMqttPingreqPacket, ...getExtraArguments(type) as [IMqttProtocolVersion]);
    case MQTT_PINGRESP_PACKET_TYPE:
      return createByteIteratorEncoderForMqttPingrespPacket(packet as IMqttPingrespPacket, ...getExtraArguments(type) as [IMqttProtocolVersion]);
    case MQTT_DISCONNECT_PACKET_TYPE:
      return createByteIteratorEncoderForReadonlyMqttDisconnectPacket(packet as IReadonlyMqttDisconnectPacket, ...getExtraArguments(type) as [IMqttProtocolVersion]);
    case MQTT_AUTH_PACKET_TYPE:
      return createByteIteratorEncoderForReadonlyMqttAuthPacket(packet as IReadonlyMqttAuthPacket, ...getExtraArguments(type) as [IMqttProtocolVersion]);
    default:
      throw new Error(`Invalid packet type: ${type}`);
  }
}

