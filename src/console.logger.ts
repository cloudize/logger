import { isEmpty, stringify } from '@apigames/json';
import { Logger, LoggerMessageType, LoggerPayload } from './logger.interface';
import { MessageType } from './message.type';

// eslint-disable-next-line import/prefer-default-export
const ConsoleLogger: Logger = class {
  static write = (type: LoggerMessageType, message: string, payload?: LoggerPayload): void => {
    // eslint-disable-next-line no-console
    console.log(`${MessageType(type)}: ${message}`);

    if (!isEmpty(payload)) {
      // eslint-disable-next-line no-console
      console.log(stringify(payload));
    }
  }
};

export default ConsoleLogger;
