import { DomainCommandHandlerFactory } from '../types';
import createMeasureCurrentHandler from './createMeasureCurrentHandler';
import createMeasureVoltageHandler from './createMeasureVoltageHandler';

export const factories: DomainCommandHandlerFactory[] = [
  createMeasureCurrentHandler,
  createMeasureVoltageHandler,
];
