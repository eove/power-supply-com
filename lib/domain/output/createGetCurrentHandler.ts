import {
  DomainCommand,
  DomainCommandHandler,
  DomainCommandHandlerFactoryDependencies
} from '../types';

export default function createGetCurrentHandler(
  dependencies: DomainCommandHandlerFactoryDependencies
): DomainCommandHandler {
  const { runCommand, driver, debug } = dependencies;
  return {
    type: 'GET_CURRENT',
    handle: ({ type }: DomainCommand) => {
      debug(`running ${type} command handler...`);

      return runCommand(driver.buildGetCurrentCommand()).then(result => {
        return Object.assign({}, result, { raw: Number(result.raw) });
      });
    }
  };
}
