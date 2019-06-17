import { Driver } from '../../domain';

import buildInitializeCommand from './buildInitializeCommand';
import buildQueryIdentificationCommand from './buildQueryIdentificationCommand';
import buildSetVoltageCommand from './buildSetVoltageCommand';
import findAnswers from './findAnswers';

export function createIT6932ADriver(): Driver {
  return {
    buildInitializeCommand,
    buildQueryIdentificationCommand,
    buildSetVoltageCommand,
    findAnswers
  };
}
