import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizeDirective } from './resize.directive';
import { SplitterPaneComponent } from './splitter-pane/splitter-pane.component';
import { SplitterComponent } from './splitter.component';
import { SplitterBarComponent } from './splitter-bar/splitter-bar.component';

@NgModule({
  declarations: [SplitterComponent, SplitterPaneComponent, SplitterBarComponent, ResizeDirective],
  imports: [CommonModule],
  exports: [SplitterComponent, SplitterPaneComponent, SplitterBarComponent, ResizeDirective],
})
export class SplitterModule {}
