import { ILogger, LoggerMessageType, LoggerPayload } from '../interfaces/logger';

// eslint-disable-next-line import/prefer-default-export
const MockLogger: ILogger = class {
  // eslint-disable-next-line no-undef,no-unused-vars
  static write = jest.fn((type: LoggerMessageType, message: string, payload?: LoggerPayload) => {})};

export default MockLogger;
