import { Component, OnInit } from '@angular/core';
import { SplitterService } from '../../shared/components/splitter/splitter.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss'],
})
export class StatusBarComponent implements OnInit {
  sidebarOpen: boolean = true;

  constructor(private splitterService: SplitterService) {}

  ngOnInit(): void {}

  sidebarToggle(toggle: boolean): void {
    this.sidebarOpen = !this.sidebarOpen;
    this.splitterService.toggle(toggle);
  }
}
