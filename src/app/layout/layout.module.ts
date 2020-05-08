import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [TitleBarComponent, SidebarComponent, ContentComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [TitleBarComponent, ContentComponent],
})
export class LayoutModule {}
