import {
  DomainCommand,
  DomainCommandHandler,
  DomainCommandHandlerFactoryDependencies,
} from '../types';

export default function createSetCurrentHandler(
  dependencies: DomainCommandHandlerFactoryDependencies
): DomainCommandHandler {
  const { runCommand, driver, debug } = dependencies;
  return {
    type: 'SET_CURRENT',
    handle: ({ type, payload }: DomainCommand) => {
      const { current } = payload;

      debug(`running ${type} command handler with current: ${current}...`);

      return runCommand(driver.buildSetCurrentCommand(current));
    },
  };
}
