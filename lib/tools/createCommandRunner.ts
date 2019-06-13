import { createMessageBus, MessageBus } from '@arpinum/messaging';
import { createQueue } from '@arpinum/promising';
import { from, Observable, Subject, throwError } from 'rxjs';
import {
  catchError,
  filter,
  first,
  map,
  mergeMap,
  publish,
  refCount,
  scan,
  timeout
} from 'rxjs/operators';

import { Driver, FindAnswersResult } from '../devices';
import {
  DomainCommand,
  DomainCommandHandlerFactory,
  DriverAnswer,
  DriverCommand
} from '../domain';
import { Transport } from './createTransport';

interface CommandRunner {
  postCommand: (cmd: DomainCommand) => Promise<{}>;
  answer$: Observable<DriverAnswer>;
  command$: Observable<unknown>;
}

interface CommandRunnerDependencies {
  driver: Driver;
  handlerFactories: DomainCommandHandlerFactory[];
  debug: any;
  transport: Transport;
  data$: Observable<any>;
}

export function createCommandRunner(
  dependencies: CommandRunnerDependencies
): CommandRunner {
  const commandBus = createMessageBus({
    ensureAtLeastOneHandler: true,
    exclusiveHandlers: true
  });
  const { driver, data$, handlerFactories, transport, debug } = dependencies;
  const commandQueue = createQueue({ concurrency: 1 });
  const commandSource = new Subject();

  const answer$ = data$.pipe(
    scan(
      (acc: FindAnswersResult, byte: any) => {
        const { remaining: remainingBytes } = acc;
        const received = remainingBytes.concat(...byte);
        const { remaining, answers } = driver.findAnswers(received);
        return { remaining, answers };
      },
      {
        remaining: [],
        answers: []
      }
    ),
    filter((result: FindAnswersResult) => result.answers.length !== 0),
    map((result: FindAnswersResult) => result.answers),
    mergeMap((x: any[]) => from(x))
  );

  createAndRegisterHandlers(
    commandBus,
    handlerFactories ? handlerFactories : []
  );

  return {
    postCommand,
    answer$,
    get command$() {
      return commandSource.asObservable();
    }
  };

  function postCommand(cmd: DomainCommand): Promise<{}> {
    return commandBus.post(cmd);
  }

  function runCommand(cmd: DriverCommand) {
    const { raw, answerTimeoutMS } = cmd;
    return commandQueue.enqueue(() => {
      commandSource.next(cmd);
      const answer = waitAnswer();
      return transport.write(raw).then(() => answer);
    });

    function waitAnswer() {
      return commandAnswer$()
        .pipe(
          timeout(answerTimeoutMS),
          catchError(error => throwError(error))
        )
        .toPromise();

      function commandAnswer$() {
        return answer$.pipe(
          publish(),
          refCount(),
          first()
        );
      }
    }
  }

  function createAndRegisterHandlers(
    bus: MessageBus,
    factories: DomainCommandHandlerFactory[]
  ) {
    const unregisterHandlers: any[] = [];
    for (const factory of factories) {
      const instance = factory({ runCommand, driver, debug });
      bus.register(instance.type, instance.handle);
      unregisterHandlers.push(() => bus.unregisterAll(instance.type));
    }

    return () => {
      for (const unregister of unregisterHandlers) {
        unregister();
      }
    };
  }
}
