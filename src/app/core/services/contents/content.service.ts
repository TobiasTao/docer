import { ElectronService } from '../electron/electron.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(public electron: ElectronService) {}

  public async getDoc(path: string): Promise<string> {
    return await this.electron.ipcRenderer.invoke('getDoc', path);
  }
}
