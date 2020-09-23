"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const json_1 = require("@apigames/json");
const ConsoleLogger = (_a = class {
    },
    _a.write = (type, message, payload) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`${type}: ${message}`);
        if (!json_1.isEmpty(payload)) {
            console.log(json_1.stringify(payload));
        }
    }),
    _a);
exports.default = ConsoleLogger;
