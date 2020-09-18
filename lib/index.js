"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = exports.LoggerMessageType = void 0;
var logger_1 = require("./interfaces/logger");
Object.defineProperty(exports, "LoggerMessageType", { enumerable: true, get: function () { return logger_1.LoggerMessageType; } });
var implementations_1 = require("./implementations");
Object.defineProperty(exports, "ConsoleLogger", { enumerable: true, get: function () { return implementations_1.ConsoleLogger; } });
