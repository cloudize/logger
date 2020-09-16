import { JsonObject } from '@apigames/json';

export enum LoggerMessageType {
  Error,
  Warning,
  Info,
  Debug,
}

export type LoggerPayload = JsonObject | undefined;

export interface Logger {
  write(type: LoggerMessageType, message: string, payload?: LoggerPayload): void;
}
