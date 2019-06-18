import { Driver } from '../../domain';

import buildInitializeCommand from './buildInitializeCommand';
import buildQueryIdentificationCommand from './buildQueryIdentificationCommand';
import buildEnableOutputCommand from './buildEnableOutputCommand';
import buildDisableOutputCommand from './buildDisableOutputCommand';
import buildGetVoltageCommand from './buildGetVoltageCommand';
import buildSetVoltageCommand from './buildSetVoltageCommand';
import buildGetCurrentCommand from './buildGetCurrentCommand';
import buildSetCurrentCommand from './buildSetCurrentCommand';
import findAnswers from './findAnswers';

export function createIT6932ADriver(): Driver {
  return {
    buildInitializeCommand,
    buildQueryIdentificationCommand,
    buildEnableOutputCommand,
    buildDisableOutputCommand,
    buildGetVoltageCommand,
    buildSetVoltageCommand,
    buildGetCurrentCommand,
    buildSetCurrentCommand,
    findAnswers
  };
}
