import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent, SplitterModule } from './components';
import { appTabsModule } from './components/tabs';

import { WebviewDirective } from './directives';
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
    appTabsModule,
  ],
})
export class SharedModule {}
