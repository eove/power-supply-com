import * as debugLib from 'debug';
import * as _ from 'lodash';
import { merge, Observable, Subject } from 'rxjs';

import { createDriver } from './devices';
import { DomainCommand } from './domain';
import { commandHandlerFactories } from './domain';
import { createCommandRunner, createTransport, Device } from './tools';

export interface Communicator {
  open: (portName: string) => Promise<void>;
  close: () => Promise<void>;
  listPorts: () => Promise<Device[]>;
  sendCommand: (command: DomainCommand) => Promise<{}>;
  request: (commandType: string, args: any) => Promise<{}>;
  data$: Observable<unknown>;
  event$: Observable<unknown>;
  answer$: Observable<unknown>;
  command$: Observable<unknown>;
}

interface CommunicatiorOptions {
  deviceType?: string;
  debugEnabled?: boolean;
  transportDebugEnabled?: boolean;
}

export function createCommunicator(
  options?: CommunicatiorOptions
): Communicator {
  const debug = debugLib('power-supply');
  const { debugEnabled, transportDebugEnabled, deviceType } = _.defaults(
    options,
    {
      debugEnabled: false,
      transportDebugEnabled: false
    }
  );
  debug.enabled = debugEnabled;
  const eventSource = new Subject();

  const transport = createTransport({ debugEnabled: transportDebugEnabled });
  const driver = createDriver(deviceType);

  const commandRunner = createCommandRunner({
    driver,
    debug,
    handlerFactories: [
      ...commandHandlerFactories.common,
      ...commandHandlerFactories.output,
      ...commandHandlerFactories.measurements
    ],
    data$: transport.data$,
    transport
  });

  return {
    open,
    close,
    listPorts,
    get data$() {
      return transport.data$;
    },
    get answer$() {
      return commandRunner.answer$;
    },
    get command$() {
      return commandRunner.command$;
    },
    get event$() {
      return merge(transport.event$, eventSource.asObservable());
    },
    sendCommand,
    request
  };

  function open(portName: string): Promise<void> {
    return transport.connect(portName).then(result =>
      sendCommand({ type: 'INITIALIZE' }).then(() => {
        _sendEvent({
          type: 'COMMUNICATION_STARTED',
          payload: {
            portName
          }
        });
        return result;
      })
    );
  }

  function close(): Promise<void> {
    return transport.disconnect().then(result => {
      _sendEvent({ type: 'COMMUNICATION_STOPPED', payload: undefined });
      return result;
    });
  }

  function sendCommand(command: DomainCommand): Promise<any> {
    return commandRunner.postCommand(command);
  }

  function request(commandType: string, args: any) {
    debug(`received shell command to run: ${commandType}`);
    return sendCommand({ type: commandType, payload: args });
  }

  function listPorts(): Promise<Device[]> {
    return transport.discover();
  }

  function _sendEvent(event: { type: string; payload: any }) {
    eventSource.next(event);
  }
}
