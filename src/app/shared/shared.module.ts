import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { SplitterModule } from './components/splitter/splitter.module';
import { TabsModule } from './components/tabs/tabs.module';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//components & directives
const COMPONENTS = [PageNotFoundComponent];
const DIRECTIVES = [WebviewDirective];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule, TranslateModule, FormsModule, HttpClientModule],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    HttpClientModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    SplitterModule,
    TabsModule,
  ],
})
export class SharedModule {}
