import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import fs from 'fs';


const isDev = !app.isPackaged;
let settingFile : string
if(isDev){
  settingFile = __dirname + '/../setting_dev.json';
} else {
  settingFile = __dirname + '/../setting.json';
}
let setting : object
fs.readFile(__dirname + '/../setting.json','utf8',(err, data)=>{
  const json = JSON.parse(data);
  setting = json;
});

// 메인 윈도우 설정
let mainWindow: BrowserWindow;
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    center: true,
    kiosk: !isDev,
    resizable: true,
    fullscreen: false,
    fullscreenable: false,
    webPreferences: {
      nodeIntegration: true,
      devTools: isDev,
      contextIsolation : false
    },
  });

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../app/index.html')}`);

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  mainWindow.setResizable(true);

  mainWindow.on('closed', () => (mainWindow = undefined!));
  mainWindow.focus();
};
// 메인 윈도우 설정

// app 설정
app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
// app 설정

// service 설정
import ipc from './ipcLoader';
ipc();
// service 설정