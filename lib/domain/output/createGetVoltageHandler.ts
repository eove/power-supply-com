import {
  DomainCommand,
  DomainCommandHandler,
  DomainCommandHandlerFactoryDependencies
} from '../types';

export default function createGetVoltageHandler(
  dependencies: DomainCommandHandlerFactoryDependencies
): DomainCommandHandler {
  const { runCommand, driver, debug } = dependencies;
  return {
    type: 'GET_VOLTAGE',
    handle: ({ type }: DomainCommand) => {
      debug(`running ${type} command handler...`);

      return runCommand(driver.buildGetVoltageCommand());
    }
  };
}
