"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function ipc() {
    try {
        const services = fs_1.default.readdirSync(__dirname + '/services');
        services.forEach(service => {
            require(__dirname + '/services/' + service).default();
        });
    }
    catch (error) {
        console.error(error);
    }
}
exports.default = ipc;
