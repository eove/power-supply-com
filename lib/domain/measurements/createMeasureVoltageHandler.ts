import {
  DomainCommand,
  DomainCommandHandler,
  DomainCommandHandlerFactoryDependencies
} from '../types';

export default function createMeasureVoltageHandler(
  dependencies: DomainCommandHandlerFactoryDependencies
): DomainCommandHandler {
  const { runCommand, driver, debug } = dependencies;
  return {
    type: 'MEASURE_VOLTAGE',
    handle: ({ type }: DomainCommand) => {
      debug(`running ${type} command handler...`);

      return runCommand(driver.buildMeasureVoltageCommand()).then(result => {
        return Object.assign({}, result, { raw: Number(result.raw) });
      });
    }
  };
}
