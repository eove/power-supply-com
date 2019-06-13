export * from './types';

import { factories as commonFactories } from './common';
import { factories as voltageFactories } from './voltage';

export const commandHandlerFactories = {
  common: commonFactories,
  voltage: voltageFactories
};
