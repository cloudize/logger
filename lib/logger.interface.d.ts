import { JsonObject } from '@apigames/json';
export declare enum LoggerMessageType {
    Error = 0,
    Warning = 1,
    Info = 2,
    Debug = 3
}
export declare type LoggerPayload = JsonObject | undefined;
export interface ILogger {
    write(type: LoggerMessageType, message: string, payload?: LoggerPayload): void;
}
