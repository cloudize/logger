import { IJsonObject } from '@apigames/json';

export enum LoggerMessageType {
  Error = 'Error',
  Warning = 'Warning',
  Info = 'Info',
  Debug = 'Debug',
}

export type LoggerPayload = IJsonObject | undefined;

export interface ILogger {
  write(type: LoggerMessageType, message: string, payload?: LoggerPayload): void;
}
