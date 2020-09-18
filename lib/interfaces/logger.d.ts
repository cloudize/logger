import { JsonObject } from '@apigames/json';
export declare enum LoggerMessageType {
    Error = "Error",
    Warning = "Warning",
    Info = "Info",
    Debug = "Debug"
}
export declare type LoggerPayload = JsonObject | undefined;
export interface ILogger {
    write(type: LoggerMessageType, message: string, payload?: LoggerPayload): void;
}
