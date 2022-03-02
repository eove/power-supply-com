import toNumberResult from '../toNumberResult';
import {
  DomainCommand,
  DomainCommandHandler,
  DomainCommandHandlerFactoryDependencies,
} from '../types';

export default function createMeasureVoltageHandler(
  dependencies: DomainCommandHandlerFactoryDependencies
): DomainCommandHandler {
  const { runCommand, driver, debug } = dependencies;
  return {
    type: 'MEASURE_VOLTAGE',
    handle: ({ type }: DomainCommand) => {
      debug(`running ${type} command handler...`);

      return runCommand(driver.buildMeasureVoltageCommand()).then((result) => {
        const formatted = toNumberResult(result);
        debug('result:', formatted);
        return formatted;
      });
    },
  };
}
