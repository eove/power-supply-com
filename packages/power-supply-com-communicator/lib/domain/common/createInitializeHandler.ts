import {
  DomainCommand,
  DomainCommandHandler,
  DomainCommandHandlerFactoryDependencies
} from '../types';

export default function createQueryIdentificationHandler(
  dependencies: DomainCommandHandlerFactoryDependencies
): DomainCommandHandler {
  const { runCommand, driver, debug } = dependencies;
  return {
    type: 'INITIALIZE',
    handle: ({ type }: DomainCommand) => {
      debug(`running ${type} command handler...`);
      return runCommand(driver.buildInitializeCommand());
    }
  };
}
