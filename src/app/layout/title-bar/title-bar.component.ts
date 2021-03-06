import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../core/services';

@Component({
  selector: 'title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent implements OnInit {
  isWin32: boolean;

  constructor(private electronService: ElectronService) {}

  isFullscreen: boolean;

  ngOnInit(): void {
    this.electronService.ipcRenderer.on('isMax', (event, ans) => {
      this.isFullscreen = ans;
    });
    this.electronService.platform().subscribe((platform) => {
      this.isWin32 = platform === 'win32';
    });
  }

  windowControl(arg: string): void {
    this.electronService.ipcRenderer.invoke('window-controls', arg);
    this.isFullscreen = arg == 'max';
  }
}
