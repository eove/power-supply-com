export * from './types';

import { factories as commonFactories } from './common';
import { factories as measurementsFactories } from './measurements';
import { factories as outputFactories } from './output';
export const commandHandlerFactories = {
  common: commonFactories,
  output: outputFactories,
  measurements: measurementsFactories,
};
