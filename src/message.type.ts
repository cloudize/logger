import { LoggerMessageType } from './logger.interface';

// eslint-disable-next-line import/prefer-default-export
export const MessageType = (type: LoggerMessageType): string => {
  // eslint-disable-next-line default-case
  switch (type) {
    case LoggerMessageType.Error:
      return 'Error';
    case LoggerMessageType.Warning:
      return 'Warning';
    case LoggerMessageType.Info:
      return 'Info';
    default:
      return 'Debug';
  }
};
