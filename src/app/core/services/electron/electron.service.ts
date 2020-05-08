import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, remote } from 'electron';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;

  constructor() {
    this.ipcRenderer = window.require('electron').ipcRenderer;
    this.webFrame = window.require('electron').webFrame;
  }

  isFullscreen() {
    let flag = from(this.ipcRenderer.invoke('window-controls', 'isFullscreen'));
    return flag;
  }

  windowControl(arg: string): void {
    this.ipcRenderer.invoke('window-controls', arg);
  }

  platform() {
    let platform = from(this.ipcRenderer.invoke('helpers', 'platform'));
    return platform;
  }
}
