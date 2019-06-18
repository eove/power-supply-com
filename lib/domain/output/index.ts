import { DomainCommandHandlerFactory } from '../types';
import createEnableOutputHandler from './createEnableOutputHandler';
import createDisableOutputHandler from './createDisableOutputHandler';
import createGetVoltageHandler from './createGetVoltageHandler';
import createSetVoltageHandler from './createSetVoltageHandler';
import createGetCurrentHandler from './createGetCurrentHandler';
import createSetCurrentHandler from './createSetCurrentHandler';

export const factories: DomainCommandHandlerFactory[] = [
  createEnableOutputHandler,
  createDisableOutputHandler,
  createGetVoltageHandler,
  createSetVoltageHandler,
  createGetCurrentHandler,
  createSetCurrentHandler
];
