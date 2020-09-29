import { DomainCommandHandlerFactory } from '../types';
import createDisableOutputHandler from './createDisableOutputHandler';
import createEnableOutputHandler from './createEnableOutputHandler';
import createGetCurrentHandler from './createGetCurrentHandler';
import createGetVoltageHandler from './createGetVoltageHandler';
import createSetCurrentHandler from './createSetCurrentHandler';
import createSetVoltageHandler from './createSetVoltageHandler';

export const factories: DomainCommandHandlerFactory[] = [
  createEnableOutputHandler,
  createDisableOutputHandler,
  createGetVoltageHandler,
  createSetVoltageHandler,
  createGetCurrentHandler,
  createSetCurrentHandler
];
