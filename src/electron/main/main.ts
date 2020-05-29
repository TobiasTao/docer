import { async } from '@angular/core/testing';
import { app, BrowserWindow, screen, ipcMain, webContents } from 'electron';
import * as path from 'path';
import * as url from 'url';
import * as fs from 'fs';

let win: BrowserWindow = null;
let contents: webContents = null;
const args = process.argv.slice(1),
  serve: boolean = args.some((val) => val === '--serve');

function createWindow(): BrowserWindow {
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width * 0.8,
    height: size.height * 0.8,
    transparent: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: serve,
    },
  });

  contents = win.webContents;

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
    });
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, '../../../', 'dist/index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  win.on('maximize', () => {
    contents.send('isMax', true);
  });
  win.on('unmaximize', () => {
    contents.send('isMax', false);
  });

  return win;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();
  if (serve) {
    // install devtron: This API cannot be called before the ready event of the app module is emitted.
    // require('devtron').install();
    win.webContents.openDevTools();
  }
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

ipcMain.handle('window-controls', async (event, arg) => {
  switch (arg) {
    case 'close':
      BrowserWindow.getFocusedWindow().close();
      break;
    case 'max':
      BrowserWindow.getFocusedWindow().maximize();
      break;
    case 'unmax':
      BrowserWindow.getFocusedWindow().unmaximize();
      break;
    case 'min':
      BrowserWindow.getFocusedWindow().minimize();
      break;
  }
});

ipcMain.handle('helpers', async (event, arg) => {
  switch (arg) {
    case 'platform':
      return process.platform;
  }
});

ipcMain.handle('getDoc', async (event, arg) => {
  const mdPath = path.join(app.getPath('userData'), arg);
  const res = await new Promise((resolve, reject) => {
    fs.readFile(mdPath, 'utf8', (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
  return res;
});
