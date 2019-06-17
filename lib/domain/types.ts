export interface DriverCommand {
  raw: string;
  id?: number;
  answerTimeoutMS: number;
  isAnswerExpected: boolean;
}

export interface DriverAnswer {
  raw: string;
  id?: number;
}

export interface FindAnswersResult {
  answers: DriverAnswer[];
  remaining: string;
}

export interface Driver {
  buildInitializeCommand: () => DriverCommand;
  buildSetVoltageCommand: (voltage: number) => DriverCommand;
  buildQueryIdentificationCommand: () => DriverCommand;
  findAnswers: (data: string) => FindAnswersResult;
}

type DomainCommandPayload = any;

export interface DomainCommand {
  type: string;
  payload?: DomainCommandPayload;
}

export interface DomainCommandHandler {
  type: string;
  handle: (payload: any) => Promise<{}>;
}

export interface DomainCommandHandlerFactoryDependencies {
  driver: Driver;
  runCommand: (command: DriverCommand) => Promise<DriverAnswer>;
  debug: (...args: any) => undefined;
}

export type DomainCommandHandlerFactory = (
  dependencies: DomainCommandHandlerFactoryDependencies
) => DomainCommandHandler;
