```javascript
// Renderer process
ipcRenderer.invoke('some-name', someArgument).then((result) => {
  // ...
});
// Main process
ipcMain.handle('some-name', async (event, someArgument) => {
  const result = await doSomeWork(someArgument);
  return result;
});
```

```js
// Main process
ipcMain.handle('my-invokable-ipc', async (event, ...args) => {
  const result = await somePromise(...args);
  return result;
});

// Renderer process
async () => {
  const result = await ipcRenderer.invoke('my-invokable-ipc', arg1, arg2);
  // ...
};
```

```js
// 在主进程中.
const { app, BrowserWindow } = require('electron');
let win = null;

app.on('ready', () => {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL(`file://${__dirname}/index.html`);
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('ping', 'whoooooooh!');
  });
});
```
