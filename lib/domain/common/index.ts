import { DomainCommandHandlerFactory } from '../types';
import createInitializeHandler from './createInitializeHandler';
import createQueryIdentificationHandler from './createQueryIdentificationHandler';

export const factories: DomainCommandHandlerFactory[] = [
  createInitializeHandler,
  createQueryIdentificationHandler
];
