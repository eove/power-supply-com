import {
  DomainCommand,
  DomainCommandHandler,
  DomainCommandHandlerFactoryDependencies
} from '../types';

export default function createSetVoltageHandler(
  dependencies: DomainCommandHandlerFactoryDependencies
): DomainCommandHandler {
  const { runCommand, driver, debug } = dependencies;
  return {
    type: 'SET_VOLTAGE',
    handle: ({ type, payload }: DomainCommand) => {
      debug(`running ${type} command handler...`);

      const { voltage } = payload;
      return runCommand(driver.buildSetVoltageCommand(voltage));
    }
  };
}
