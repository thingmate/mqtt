import { MQTT_CONNECT_PACKET_TYPE } from '../../../../../built-in/01-mqtt-connect-packet/constants/mqtt-connect-packet-type.constant';
import { MQTT_CONNACK_PACKET_TYPE } from '../../../../../built-in/02-mqtt-connack-packet/constants/mqtt-connack-packet-type.constant';
import { MQTT_PUBLISH_PACKET_TYPE } from '../../../../../built-in/03-mqtt-publish-packet/constants/mqtt-publish-packet-type.constant';
import { MQTT_PUBACK_PACKET_TYPE } from '../../../../../built-in/04-mqtt-puback-packet/constants/mqtt-puback-packet-type.constant';
import { MQTT_PUBREC_PACKET_TYPE } from '../../../../../built-in/05-mqtt-pubrec-packet/constants/mqtt-pubrec-packet-type.constant';
import { MQTT_PUBREL_PACKET_TYPE } from '../../../../../built-in/06-mqtt-pubrel-packet/constants/mqtt-pubrel-packet-type.constant';
import { MQTT_PUBCOMP_PACKET_TYPE } from '../../../../../built-in/07-mqtt-pubcomp-packet/constants/mqtt-pubcomp-packet-type.constant';
import { MQTT_SUBSCRIBE_PACKET_TYPE } from '../../../../../built-in/08-mqtt-subscribe-packet/constants/mqtt-subscribe-packet-type.constant';
import { MQTT_SUBACK_PACKET_TYPE } from '../../../../../built-in/09-mqtt-suback-packet/constants/mqtt-suback-packet-type.constant';
import {
  MQTT_UNSUBSCRIBE_PACKET_TYPE,
} from '../../../../../built-in/10-mqtt-unsubscribe-packet/constants/mqtt-unsubscribe-packet-type.constant';
import { MQTT_UNSUBACK_PACKET_TYPE } from '../../../../../built-in/11-mqtt-unsuback-packet/constants/mqtt-unsuback-packet-type.constant';
import { MQTT_PINGREQ_PACKET_TYPE } from '../../../../../built-in/12-mqtt-pingreq-packet/constants/mqtt-pingreq-packet-type.constant';
import { MQTT_PINGRESP_PACKET_TYPE } from '../../../../../built-in/13-mqtt-pingresp-packet/constants/mqtt-pingresp-packet-type.constant';
import {
  MQTT_DISCONNECT_PACKET_TYPE,
} from '../../../../../built-in/14-mqtt-disconnect-packet/constants/mqtt-disconnect-packet-type.constant';
import { MQTT_AUTH_PACKET_TYPE } from '../../../../../built-in/15-mqtt-auth-packet/constants/mqtt-auth-packet-type.constant';
import {
  IGetExtraArgumentsFunctionForMqttPacketByteIteratorEncoder,
} from './get-extra-arguments-function-for-mqtt-packet-byte-iterator-encoder.type';
import { IGetMqttProtocolVersionFunction } from './get-mqtt-protocol-version-function.type';

export function generateGetExtraArgumentsFunctionForMqttPacketByteIteratorEncoder(
  getVersion: IGetMqttProtocolVersionFunction,
): IGetExtraArgumentsFunctionForMqttPacketByteIteratorEncoder {
  return (
    (type: number) => {
      switch (type) {
        case MQTT_CONNECT_PACKET_TYPE:
          return [];
        case MQTT_CONNACK_PACKET_TYPE:
        case MQTT_PUBLISH_PACKET_TYPE:
        case MQTT_PUBACK_PACKET_TYPE:
        case MQTT_PUBREC_PACKET_TYPE:
        case MQTT_PUBREL_PACKET_TYPE:
        case MQTT_PUBCOMP_PACKET_TYPE:
        case MQTT_SUBSCRIBE_PACKET_TYPE:
        case MQTT_SUBACK_PACKET_TYPE:
        case MQTT_UNSUBSCRIBE_PACKET_TYPE:
        case MQTT_UNSUBACK_PACKET_TYPE:
        case MQTT_PINGREQ_PACKET_TYPE:
        case MQTT_PINGRESP_PACKET_TYPE:
        case MQTT_DISCONNECT_PACKET_TYPE:
        case MQTT_AUTH_PACKET_TYPE:
          return [getVersion()];
        default:
          throw new Error(`Unsupported packet's type: ${type}`);
      }
    }
  ) as IGetExtraArgumentsFunctionForMqttPacketByteIteratorEncoder;
}

