import { IMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IMqttPublishPacketType } from '../constants/mqtt-publish-packet-type.constant';
import { IReadonlyMqttPublishPacketGetDuplicateTrait } from './traits/get-duplicate/readonly-mqtt-publish-packet.get-duplicate.trait';
import { IReadonlyMqttPublishPacketGetPacketIdTrait } from './traits/get-packet-id/readonly-mqtt-publish-packet.get-packet-id.trait';
import { IReadonlyMqttPublishPacketGetPayloadTrait } from './traits/get-payload/readonly-mqtt-publish-packet.get-payload.trait';
import { IReadonlyMqttPublishPacketGetPropertiesTrait } from './traits/get-properties/readonly-mqtt-publish-packet.get-properties.trait';
import { IReadonlyMqttPublishPacketGetQoSTrait } from './traits/get-qos/readonly-mqtt-publish-packet.get-qos.trait';
import { IReadonlyMqttPublishPacketGetRetainTrait } from './traits/get-retain/readonly-mqtt-publish-packet.get-retain.trait';
import { IReadonlyMqttPublishPacketGetTopicTrait } from './traits/get-topic/readonly-mqtt-publish-packet.get-topic.trait';

// https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901100

// https://github.com/mqttjs/mqtt-packet/blob/aae4e2ca077ebf57f5fd7e96c65e73c4a9677c24/writeToStream.js#L315

export interface IReadonlyMqttPublishPacket extends IMqttPacket<IMqttPublishPacketType>, //
  IReadonlyMqttPublishPacketGetDuplicateTrait,
  IReadonlyMqttPublishPacketGetQoSTrait,
  IReadonlyMqttPublishPacketGetRetainTrait,
  IReadonlyMqttPublishPacketGetTopicTrait,
  IReadonlyMqttPublishPacketGetPacketIdTrait,
  IReadonlyMqttPublishPacketGetPropertiesTrait,
  IReadonlyMqttPublishPacketGetPayloadTrait
//
{

}
