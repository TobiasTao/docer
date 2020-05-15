import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

const MaterialModules = [
  MatIconModule,
  MatButtonModule,
  MatTabsModule,
  MatExpansionModule,
  CdkAccordionModule,
  MatListModule,
  MatRippleModule,
];

@NgModule({
  imports: MaterialModules,
  exports: MaterialModules,
})
export class MaterialModule {}
