import { DomainCommandHandlerFactory } from '../types';
import createSetVoltageHandler from './createSetVoltageHandler';

export const factories: DomainCommandHandlerFactory[] = [
  createSetVoltageHandler
];
