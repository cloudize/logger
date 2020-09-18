"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockLogger = exports.ConsoleLogger = void 0;
var console_logger_1 = require("./console.logger");
Object.defineProperty(exports, "ConsoleLogger", { enumerable: true, get: function () { return __importDefault(console_logger_1).default; } });
var mock_logger_1 = require("./mock.logger");
Object.defineProperty(exports, "MockLogger", { enumerable: true, get: function () { return __importDefault(mock_logger_1).default; } });
