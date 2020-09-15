"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageType = void 0;
const logger_interface_1 = require("./logger.interface");
exports.MessageType = (type) => {
    switch (type) {
        case logger_interface_1.LoggerMessageType.Error:
            return 'Error';
        case logger_interface_1.LoggerMessageType.Warning:
            return 'Warning';
        case logger_interface_1.LoggerMessageType.Info:
            return 'Info';
        default:
            return 'Debug';
    }
};
