import { JsonObject } from '@apigames/json';

export enum LoggerMessageType {
  Error = 'Error',
  Warning = 'Warning',
  Info = 'Info',
  Debug = 'Debug',
}

export type LoggerPayload = JsonObject | undefined;

export interface ILogger {
  write(type: LoggerMessageType, message: string, payload?: LoggerPayload): void;
}
