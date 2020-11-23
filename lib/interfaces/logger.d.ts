export declare enum LoggerMessageType {
    Error = "Error",
    Warning = "Warning",
    Info = "Info",
    Debug = "Debug"
}
export declare type LoggerPayload = any;
export interface ILogger {
    write(type: LoggerMessageType, message: string, payload?: LoggerPayload, date?: Date): Promise<void>;
}
