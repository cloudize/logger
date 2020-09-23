import { isEmpty, stringify } from '@apigames/json';
import { ILogger, LoggerMessageType, LoggerPayload } from '../interfaces/logger';

// eslint-disable-next-line import/prefer-default-export
const ConsoleLogger: ILogger = class {
  static write = async (type: LoggerMessageType, message: string, payload?: LoggerPayload): Promise<void> => {
    // eslint-disable-next-line no-console
    console.log(`${type}: ${message}`);

    if (!isEmpty(payload)) {
      // eslint-disable-next-line no-console
      console.log(stringify(payload));
    }
  }
};

export default ConsoleLogger;
