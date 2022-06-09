"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
function testService() {
    electron_1.ipcMain.on("test/hi", (e, arg) => {
        console.log('test/hi', arg);
    });
}
exports.default = testService;
