import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { AppAccordionTab } from './accordiontab';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-accordion',
  template: `<ng-content></ng-content>`,
  styleUrls: ['accordion.scss'],
  exportAs: 'appAccordion',
})
export class AppAccordion {
  private _multiple: boolean;

  @Input()
  get multiple(): boolean {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = coerceBooleanProperty(value);
  }

  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() open: EventEmitter<any> = new EventEmitter<any>();

  tabs: AppAccordionTab[] = [];

  /**
   * Add or append tab in accordion
   * @param tab object of AppAccordionTab
   */
  addTab(tab: AppAccordionTab) {
    this.tabs.push(tab);
  }
}
