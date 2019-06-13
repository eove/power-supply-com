import { DomainCommandHandlerFactory } from '../types';
import createQueryIdentificationHandler from './createQueryIdentificationHandler';

export const factories: DomainCommandHandlerFactory[] = [
  createQueryIdentificationHandler
];
