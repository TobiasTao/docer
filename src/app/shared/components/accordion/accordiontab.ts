import { Component, Directive, Input, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AppAccordion } from './accordion';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({ selector: 'app-accordion-header' })
export class AppAccordionHeader {}

@Component({
  selector: 'app-accordion-tab',
  template: `
    <div class="app-accordion-header" (click)="_handleClick($event)">
      <span>{{ header }}</span>
      <ng-content select="app-accordion-header"></ng-content>
      <span class="app-accordion-header-icon"></span>
    </div>
    <div class="app-accordion-tab-body" [@slide]="slide">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['accordion.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('down => up', [style({ height: '*' }), animate(300, style({ height: 0 }))]),
      transition('up => down', [
        style({ height: 0 }),
        animate(
          300,
          style({
            height: '*',
          }),
        ),
      ]),
    ]),
  ],
  host: {
    role: 'accordion-tab',
    '[class.app-accordion-tab-active]': 'active',
    '[class.app-accordion-tab-disabled]': 'disabled',
  },
  encapsulation: ViewEncapsulation.None,
  exportAs: 'appAccordionTab',
})
export class AppAccordionTab {
  private _disabled: boolean = false;
  private _active: boolean = false;

  @Input() header: string;

  @Input() hasChild: boolean;

  @Input()
  get active(): boolean {
    return this._active;
  }
  set active(value) {
    this._active = coerceBooleanProperty(value);
    if (this._active && !this._accordion.multiple) {
      for (let i = 0; i < this._accordion.tabs.length; i++) {
        if (this._accordion.tabs[i] !== this) {
          this._accordion.tabs[i].active = false;
        }
      }
    }
  }

  get slide(): string {
    return this.active ? 'down' : 'up';
  }

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
  }

  constructor(private _accordion: AppAccordion) {
    this._accordion.addTab(this);
  }

  /**
   * Toggle the accordion
   * @param event
   * @return if it is disabled
   */
  _handleClick(event: Event) {
    if (this.disabled) {
      return;
    }

    let index = this.findTabIndex();

    if (this.active) {
      this.active = !this.active;
      this._accordion.close.emit({ originalEvent: event, index: index });
    } else if (!this._accordion.multiple) {
      for (let i = 0; i < this._accordion.tabs.length; i++) {
        this._accordion.tabs[i].active = false;
      }
      this._active = true;
      this._accordion.open.emit({ originalEvent: event, index: index });
    } else {
      this._active = true;
      this._accordion.open.emit({ originalEvent: event, index: index });
    }

    event.preventDefault();
  }

  /**
   * Find index of specific tab of accordion
   * @return index number of this tab
   */
  findTabIndex() {
    let index = -1;
    for (let i = 0; i < this._accordion.tabs.length; i++) {
      if (this._accordion.tabs[i] === this) {
        index = i;
        break;
      }
    }
    return index;
  }
}
