import {
  AfterContentInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';

/** Change event object that is emitted when the tab has changed. */
export class appTabChange {
  constructor(public tab: appTab, public index: number) {}
}

@Directive({ selector: '[appTransclude]' })
export class appTransclude {
  private _appTransclude: TemplateRef<any>;

  constructor(public viewRef: ViewContainerRef) {}

  @Input()
  get appTransclude() {
    return this._appTransclude;
  }
  set appTransclude(templateRef: TemplateRef<any>) {
    this._appTransclude = templateRef;
    if (templateRef) {
      this.viewRef.createEmbeddedView(templateRef);
    }
  }
}

@Component({
  selector: 'app-tab',
  template: `<ng-content></ng-content>`,
  host: {
    '[class]': 'class',
    '[class.active]': 'active',
  },
})
export class appTab {
  @Input() label: string;

  @Input() active: boolean;

  @Input() disabled: boolean;

  @Input() class: string;

  labelRef: TemplateRef<any>;
}

@Directive({ selector: '[app-tab-label]' })
export class appTabLabel {
  constructor(public templateRef: TemplateRef<any>, tab: appTab) {
    tab.labelRef = templateRef;
  }
}

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.html',
  styleUrls: ['tabs.scss'],
  host: {
    '[class]': 'class',
    '(window:resize)': 'onWindowResize()',
  },
  encapsulation: ViewEncapsulation.None,
})
export class appTabs implements AfterContentInit {
  @ContentChildren(appTab) tabs: QueryList<appTab>;

  private _isInitialized: boolean = false;
  private _focusIndex: number = 0;
  private _selectedIndex: number = 0;
  _offsetLeft: number = 0;
  _inkBarLeft: string = '0';
  _inkBarWidth: string = '0';

  @Input() class: string;

  @Input()
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value: any) {
    if (typeof value === 'string') {
      value = parseInt(value);
    }
    if (value !== this._selectedIndex) {
      this._selectedIndex = value;
      this.adjustOffset(value);
      this._updateInkBar();
      if (this.tabs) {
        const tabs = this.tabs.toArray();
        if (!tabs[value].disabled) {
          tabs.forEach((tab) => (tab.active = false));
          tabs[value].active = true;
        }
      }
      if (this._isInitialized) {
        this._emitChangeEvent();
        this.selectedIndexChange.emit(value);
      }
    }
  }

  get focusIndex(): number {
    return this._focusIndex;
  }
  set focusIndex(value: number) {
    this._focusIndex = value;
    this.adjustOffset(value);
  }

  get element() {
    const elements: any = {
      root: this.elementRef.nativeElement,
      wrapper: null,
      canvas: null,
      paging: null,
      tabs: null,
    };
    elements.wrapper = elements.root.querySelector('.app-tabs-header-wrapper');
    elements.canvas = elements.wrapper.querySelector('.app-tabs-canvas');
    elements.paging = elements.canvas.querySelector('.app-tabs-header');
    elements.tabs = elements.paging.querySelectorAll('.app-tab-label');
    return elements;
  }

  @Output() change: EventEmitter<appTabChange> = new EventEmitter<appTabChange>();
  @Output() selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private elementRef: ElementRef) {}

  /**
   * After Content Init
   */
  ngAfterContentInit() {
    setTimeout(() => {
      this.updatePagination();
    }, 0);
    setTimeout(() => {
      const tabs = this.tabs.toArray();
      if (this.selectedIndex) {
        if (this.selectedIndex >= tabs.length) {
          this.selectedIndex = 0;
        }
        tabs.forEach((tab) => (tab.active = false));
        tabs[this.selectedIndex].active = true;
        this.adjustOffset(this.selectedIndex);
      } else {
        let index = tabs.findIndex((t: any) => t.active);
        if (index < 0) {
          tabs[0].active = true;
        } else {
          this.selectedIndex = index;
        }
      }
      this._updateInkBar();
    }, 0);
    this._isInitialized = true;
  }

  /**
   * Calculates the styles from the selected tab for the ink-bar.
   */
  private _updateInkBar(): void {
    let elements = this.element;
    if (!elements.tabs[this.selectedIndex]) {
      return;
    }
    let tab = elements.tabs[this.selectedIndex];
    this._inkBarLeft = tab.offsetLeft + 'px';
    this._inkBarWidth = tab.offsetWidth + 'px';
  }

  /**
   * Emits an event when the user selects an option.
   */
  _emitChangeEvent(): void {
    let index = this._selectedIndex;
    this.change.emit(new appTabChange(this.tabs.toArray()[index], index));
  }

  /**
   * Focus next Tab
   */
  focusNextTab() {
    this.incrementIndex(1);
  }

  /**
   * Focus previous Tab
   */
  focusPreviousTab() {
    this.incrementIndex(-1);
  }

  /**
   * Mouse Wheel scroll
   * @param event
   */
  scroll(event: any) {
    event.preventDefault();
    this._offsetLeft = this.fixOffset(this._offsetLeft - event.wheelDelta);
  }

  /**
   * On Window Resize
   * @param event
   */
  onWindowResize() {
    this._offsetLeft = this.fixOffset(this._offsetLeft);
    this.updatePagination();
  }

  /**
   * Update Pagination
   */
  updatePagination() {
    let canvasWidth = this.element.root.clientWidth;
    let tabs: any[] = this.element.tabs ? this.element.tabs : [];
    for (let i = 0; i < tabs.length; i++) {
      canvasWidth -= tabs[i].offsetWidth;
    }
  }

  /**
   * Increment Focus Tab
   * @param inc
   */
  incrementIndex(inc: any) {
    let newIndex: number,
      index = this.focusIndex;
    for (
      newIndex = index + inc;
      this.tabs.toArray()[newIndex] && this.tabs.toArray()[newIndex].disabled;
      newIndex += inc
    ) {}
    if (this.tabs.toArray()[newIndex]) {
      this.focusIndex = newIndex;
    }
  }

  /**
   * Adjust Offset of Tab
   * @param index
   */
  adjustOffset(index: number) {
    let elements = this.element;
    if (!elements.tabs[index]) {
      return;
    }
    let tab = elements.tabs[index],
      left = tab.offsetLeft,
      right = tab.offsetWidth + left;
    this._offsetLeft = Math.max(this._offsetLeft, this.fixOffset(right - elements.canvas.clientWidth + 32 * 2));
    this._offsetLeft = Math.min(this._offsetLeft, this.fixOffset(left));
  }

  /**
   * Fix Offset of Tab
   * @param value
   * @return value
   */
  fixOffset(value: any) {
    let elements = this.element;
    if (!elements.tabs.length) {
      return 0;
    }
    let lastTab = elements.tabs[elements.tabs.length - 1],
      totalWidth = lastTab.offsetLeft + lastTab.offsetWidth;
    value = Math.min(totalWidth - elements.canvas.clientWidth, value);
    value = Math.max(0, value);
    return value;
  }
}

export const app_TABS_DIRECTIVES: any[] = [appTabLabel, appTabs, appTab];

@NgModule({
  imports: [CommonModule],
  exports: app_TABS_DIRECTIVES,
  declarations: [appTransclude, appTabLabel, appTabs, appTab],
})
export class appTabsModule {}
