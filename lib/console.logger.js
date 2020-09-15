"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const json_1 = require("@apigames/json");
const message_type_1 = require("./message.type");
const ConsoleLogger = (_a = class {
    },
    _a.write = (type, message, payload) => {
        console.log(`${message_type_1.MessageType(type)}: ${message}`);
        if (!json_1.isEmpty(payload)) {
            console.log(json_1.stringify(payload));
        }
    },
    _a);
exports.default = ConsoleLogger;
