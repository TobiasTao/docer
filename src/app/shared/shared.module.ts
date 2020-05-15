import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { PageNotFoundComponent, SplitterModule } from './components';
import { AppAccordion } from './components/accordion/accordion';
import { AppAccordionHeader, AppAccordionTab } from './components/accordion/accordiontab';
import { appTabsModule } from './components/tabs';

import { WebviewDirective } from './directives';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//components & directives
const COMPONENTS = [PageNotFoundComponent, AppAccordion, AppAccordionTab, AppAccordionHeader];
const DIRECTIVES = [WebviewDirective];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule, TranslateModule, FormsModule, HttpClientModule, RouterModule],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    SplitterModule,
    appTabsModule,
    NgScrollbarModule,
  ],
})
export class SharedModule {}
