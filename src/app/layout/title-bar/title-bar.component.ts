import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../core/services';
import { from } from 'rxjs';

@Component({
  selector: 'title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent implements OnInit {
  constructor(private electronService: ElectronService) {}

  isFullscreen: boolean;

  ngOnInit(): void {
    // this.electronService.isFullscreen().subscribe((ans) => {
    //   this.isFullscreen = ans;
    // });
    this.electronService.ipcRenderer.on('isMax', (event, ans) => {
      this.isFullscreen = ans;
    });
  }

  windowControl(arg: string): void {
    this.electronService.ipcRenderer.invoke('window-controls', arg);
    this.isFullscreen = arg == 'max';
  }
}
