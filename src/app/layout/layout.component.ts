import { OnInit, Component } from '@angular/core';
import { ElectronService } from '../core/services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {
  isWin32;

  // splitter input
  orientation = 'horizontal';
  splitBarSize = '2px';

  // splitter pane input
  size = '30%';
  minSize = '20%';
  maxSize = '60%';

  constructor(private electronService: ElectronService) {}

  ngOnInit(): void {
    this.electronService.platform().subscribe((platform) => {
      this.isWin32 = platform;
    });
  }
}
