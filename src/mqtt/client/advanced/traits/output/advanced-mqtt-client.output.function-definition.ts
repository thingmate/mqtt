import { IPushSinkWithBackPressure } from '@lirx/stream';
import { IGenericMqttPacket } from '../../../../packets/components/mqtt-packet/mqtt-packet.type';

export type IAdvancedMqttClientOutputFunction = IPushSinkWithBackPressure<IGenericMqttPacket>;
