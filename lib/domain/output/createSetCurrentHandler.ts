import {
  DomainCommand,
  DomainCommandHandler,
  DomainCommandHandlerFactoryDependencies
} from '../types';

export default function createSetCurrentHandler(
  dependencies: DomainCommandHandlerFactoryDependencies
): DomainCommandHandler {
  const { runCommand, driver, debug } = dependencies;
  return {
    type: 'SET_CURRENT',
    handle: ({ type, payload }: DomainCommand) => {
      debug(`running ${type} command handler...`);

      const { current } = payload;
      return runCommand(driver.buildSetCurrentCommand(current));
    }
  };
}
