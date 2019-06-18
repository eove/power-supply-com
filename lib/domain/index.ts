export * from './types';

import { factories as commonFactories } from './common';
import { factories as outputFactories } from './output';

export const commandHandlerFactories = {
  common: commonFactories,
  output: outputFactories
};
