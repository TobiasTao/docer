import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { SideListComponent } from './sidebar/side-list/side-list.component';

@NgModule({
  declarations: [TitleBarComponent, SidebarComponent, ContentComponent, SideListComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [TitleBarComponent, ContentComponent, SidebarComponent],
})
export class LayoutModule {}
