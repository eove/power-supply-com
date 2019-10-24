import {
  DomainCommand,
  DomainCommandHandler,
  DomainCommandHandlerFactoryDependencies
} from '../types';

export default function createMeasureCurrentHandler(
  dependencies: DomainCommandHandlerFactoryDependencies
): DomainCommandHandler {
  const { runCommand, driver, debug } = dependencies;
  return {
    type: 'MEASURE_CURRENT',
    handle: ({ type }: DomainCommand) => {
      debug(`running ${type} command handler...`);

      return runCommand(driver.buildMeasureCurrentCommand()).then(result => {
        return Object.assign({}, result, { raw: Number(result.raw) });
      });
    }
  };
}
