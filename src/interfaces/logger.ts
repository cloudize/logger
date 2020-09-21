export enum LoggerMessageType {
  Error = 'Error',
  Warning = 'Warning',
  Info = 'Info',
  Debug = 'Debug',
}

export type LoggerPayload = any;

export interface ILogger {
  write(type: LoggerMessageType, message: string, payload?: LoggerPayload): void;
}
