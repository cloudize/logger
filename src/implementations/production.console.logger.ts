import { isEmpty } from '@apigames/json';
import { ILogger, LoggerMessageType, LoggerPayload } from '../interfaces/logger';

// eslint-disable-next-line import/prefer-default-export
const ProductionConsoleLogger: ILogger = class {
  static Write = async (type: LoggerMessageType, message: string, payload?: LoggerPayload, date?: Date): Promise<void> => {
    if ((type === LoggerMessageType.Error) || (type === LoggerMessageType.Warning)) {
      let messageDate = date;
      if (!messageDate) {
        messageDate = new Date();
      }

      let typeStr: string = type;
      while (typeStr.length < 7) typeStr += ' ';

      // eslint-disable-next-line no-console
      console.log(`${messageDate.toISOString()} ${typeStr.toUpperCase()} ${message}`);

      if (!isEmpty(payload)) {
        // eslint-disable-next-line no-console
        console.log(`${messageDate.toISOString()} PAYLOAD [${JSON.stringify(payload).length} bytes]`);
      }
    }
  }
};

export default ProductionConsoleLogger;