import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import { IMqttConnectPacketType } from '../../../../../built-in/01-mqtt-connect-packet/constants/mqtt-connect-packet-type.constant';
import { IMqttConnackPacketType } from '../../../../../built-in/02-mqtt-connack-packet/constants/mqtt-connack-packet-type.constant';
import { IMqttPublishPacketType } from '../../../../../built-in/03-mqtt-publish-packet/constants/mqtt-publish-packet-type.constant';
import { IMqttPubackPacketType } from '../../../../../built-in/04-mqtt-puback-packet/constants/mqtt-puback-packet-type.constant';
import { IMqttPubrecPacketType } from '../../../../../built-in/05-mqtt-pubrec-packet/constants/mqtt-pubrec-packet-type.constant';
import { IMqttPubrelPacketType } from '../../../../../built-in/06-mqtt-pubrel-packet/constants/mqtt-pubrel-packet-type.constant';
import { IMqttPubcompPacketType } from '../../../../../built-in/07-mqtt-pubcomp-packet/constants/mqtt-pubcomp-packet-type.constant';
import { IMqttSubscribePacketType } from '../../../../../built-in/08-mqtt-subscribe-packet/constants/mqtt-subscribe-packet-type.constant';
import { IMqttSubackPacketType } from '../../../../../built-in/09-mqtt-suback-packet/constants/mqtt-suback-packet-type.constant';
import {
  IMqttUnsubscribePacketType,
} from '../../../../../built-in/10-mqtt-unsubscribe-packet/constants/mqtt-unsubscribe-packet-type.constant';
import { IMqttUnsubackPacketType } from '../../../../../built-in/11-mqtt-unsuback-packet/constants/mqtt-unsuback-packet-type.constant';
import { IMqttPingreqPacketType } from '../../../../../built-in/12-mqtt-pingreq-packet/constants/mqtt-pingreq-packet-type.constant';
import { IMqttPingrespPacketType } from '../../../../../built-in/13-mqtt-pingresp-packet/constants/mqtt-pingresp-packet-type.constant';
import {
  IMqttDisconnectPacketType,
} from '../../../../../built-in/14-mqtt-disconnect-packet/constants/mqtt-disconnect-packet-type.constant';
import { IMqttAuthPacketType } from '../../../../../built-in/15-mqtt-auth-packet/constants/mqtt-auth-packet-type.constant';

export interface IGetExtraArgumentsFunctionForMqttPacketByteIteratorDecoder {
  (type: IMqttConnectPacketType): [];

  (type: IMqttConnackPacketType): [IMqttProtocolVersion];

  (type: IMqttPublishPacketType): [IMqttProtocolVersion];

  (type: IMqttPubackPacketType): [IMqttProtocolVersion];

  (type: IMqttPubrecPacketType): [IMqttProtocolVersion];

  (type: IMqttPubrelPacketType): [IMqttProtocolVersion];

  (type: IMqttPubcompPacketType): [IMqttProtocolVersion];

  (type: IMqttSubscribePacketType): [IMqttProtocolVersion];

  (type: IMqttSubackPacketType): [IMqttProtocolVersion];

  (type: IMqttUnsubscribePacketType): [IMqttProtocolVersion];

  (type: IMqttUnsubackPacketType): [IMqttProtocolVersion];

  (type: IMqttPingreqPacketType): [IMqttProtocolVersion];

  (type: IMqttPingrespPacketType): [IMqttProtocolVersion];

  (type: IMqttDisconnectPacketType): [IMqttProtocolVersion];

  (type: IMqttAuthPacketType): [IMqttProtocolVersion];
}
