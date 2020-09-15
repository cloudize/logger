import { JsonObject } from '@apigames/json';

export enum LoggerMessageType {
  Error,
  Warning,
  Info,
  Debug,
}

export type LoggerPayload = JsonObject | undefined;

export interface ILogger {
  write(type: LoggerMessageType, message: string, payload?: LoggerPayload): void;
}
