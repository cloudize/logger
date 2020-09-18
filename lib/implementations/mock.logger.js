"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const MockLogger = (_a = class {
    },
    _a.write = jest.fn((type, message, payload) => { }),
    _a);
exports.default = MockLogger;
