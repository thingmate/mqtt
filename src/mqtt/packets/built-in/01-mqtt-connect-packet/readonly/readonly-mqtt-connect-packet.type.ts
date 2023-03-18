import { IMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IMqttConnectPacketType } from '../constants/mqtt-connect-packet-type.constant';
import { IReadonlyMqttConnectPacketGetCleanTrait } from './traits/get-clean/readonly-mqtt-connect-packet.get-clean.trait';
import { IReadonlyMqttConnectPacketGetClientIdTrait } from './traits/get-client-id/readonly-mqtt-connect-packet.get-client-id.trait';
import { IReadonlyMqttConnectPacketGetKeepaliveTrait } from './traits/get-keepalive/readonly-mqtt-connect-packet.get-keepalive.trait';
import { IReadonlyMqttConnectPacketGetPasswordTrait } from './traits/get-password/readonly-mqtt-connect-packet.get-password.trait';
import { IReadonlyMqttConnectPacketGetPropertiesTrait } from './traits/get-properties/readonly-mqtt-connect-packet.get-properties.trait';
import {
  IReadonlyMqttConnectPacketGetProtocolNameTrait,
} from './traits/get-protocol-name/readonly-mqtt-connect-packet.get-protocol-name.trait';
import {
  IReadonlyMqttConnectPacketGetProtocolVersionTrait,
} from './traits/get-protocol-version/readonly-mqtt-connect-packet.get-protocol-version.trait';
import { IReadonlyMqttConnectPacketGetUsernameTrait } from './traits/get-username/readonly-mqtt-connect-packet.get-username.trait';
import { IReadonlyMqttConnectPacketGetWillTrait } from './traits/get-will/readonly-mqtt-connect-packet.get-will.trait';

// https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901033

// https://github.com/mqttjs/mqtt-packet/blob/aae4e2ca077ebf57f5fd7e96c65e73c4a9677c24/writeToStream.js#L83

export interface IReadonlyMqttConnectPacket extends IMqttPacket<IMqttConnectPacketType>, //
  IReadonlyMqttConnectPacketGetProtocolNameTrait,
  IReadonlyMqttConnectPacketGetProtocolVersionTrait,
  IReadonlyMqttConnectPacketGetCleanTrait,
  IReadonlyMqttConnectPacketGetKeepaliveTrait,
  IReadonlyMqttConnectPacketGetPropertiesTrait,
  IReadonlyMqttConnectPacketGetClientIdTrait,
  IReadonlyMqttConnectPacketGetWillTrait,
  IReadonlyMqttConnectPacketGetUsernameTrait,
  IReadonlyMqttConnectPacketGetPasswordTrait
//
{

}
