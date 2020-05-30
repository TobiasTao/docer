import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { SideListComponent } from './sidebar/side-list/side-list.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { DocContentComponent } from './content/doc-content/doc-content.component';
import { ActivityBarComponent } from './activity-bar/activity-bar.component';

@NgModule({
  declarations: [
    TitleBarComponent,
    SidebarComponent,
    ContentComponent,
    SideListComponent,
    StatusBarComponent,
    DocContentComponent,
    ActivityBarComponent,
  ],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [TitleBarComponent, ContentComponent, SidebarComponent, StatusBarComponent, ActivityBarComponent],
})
export class LayoutModule {}
