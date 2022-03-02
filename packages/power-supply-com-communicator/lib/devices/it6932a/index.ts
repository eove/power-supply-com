import { Driver } from '../../domain';

import buildDisableOutputCommand from './buildDisableOutputCommand';
import buildEnableOutputCommand from './buildEnableOutputCommand';
import buildGetCurrentCommand from './buildGetCurrentCommand';
import buildGetVoltageCommand from './buildGetVoltageCommand';
import buildInitializeCommand from './buildInitializeCommand';
import buildMeasureCurrentCommand from './buildMeasureCurrentCommand';
import buildMeasureVoltageCommand from './buildMeasureVoltageCommand';
import buildQueryIdentificationCommand from './buildQueryIdentificationCommand';
import buildSetCurrentCommand from './buildSetCurrentCommand';
import buildSetVoltageCommand from './buildSetVoltageCommand';
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
    buildMeasureVoltageCommand,
    buildMeasureCurrentCommand,
    findAnswers,
  };
}
