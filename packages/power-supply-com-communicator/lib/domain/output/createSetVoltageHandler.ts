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
      const { voltage } = payload;

      debug(`running ${type} command handler with voltage: ${voltage}...`);

      return runCommand(driver.buildSetVoltageCommand(voltage));
    }
  };
}
