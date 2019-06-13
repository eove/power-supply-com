import { Driver } from '../../domain';

import buildQueryIdentificationCommand from './buildQueryIdentificationCommand';
import buildSetVoltageCommand from './buildSetVoltageCommand';
import findAnswers from './findAnswers';

export function createIT6932ADriver(): Driver {
  return {
    buildQueryIdentificationCommand,
    buildSetVoltageCommand,
    findAnswers
  };
}
