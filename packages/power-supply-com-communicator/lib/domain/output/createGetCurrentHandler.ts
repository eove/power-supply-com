import toNumberResult from '../toNumberResult';
import {
  DomainCommand,
  DomainCommandHandler,
  DomainCommandHandlerFactoryDependencies,
} from '../types';

export default function createGetCurrentHandler(
  dependencies: DomainCommandHandlerFactoryDependencies
): DomainCommandHandler {
  const { runCommand, driver, debug } = dependencies;
  return {
    type: 'GET_CURRENT',
    handle: ({ type }: DomainCommand) => {
      debug(`running ${type} command handler...`);

      return runCommand(driver.buildGetCurrentCommand()).then((result) => {
        const formatted = toNumberResult(result);
        debug('result:', formatted);
        return formatted;
      });
    },
  };
}
