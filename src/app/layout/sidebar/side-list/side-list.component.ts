import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Params, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

export type AccordionList = {
  id: string;
  title: string;
  children?: Array<AccordionList>;
  items?: Array<string>;
};

@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.scss'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed', style({ height: '0px', display: 'none' })),
      state('expanded', style({ height: '*', display: 'block' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ]),
    trigger('iconExpansion', [
      state('collapsed', style({})),
      state('expanded', style({ transform: 'rotate(90deg)' })),
      transition('expanded <=> collapsed', animate('225ms')),
    ]),
  ],
})
export class SideListComponent implements OnInit, OnDestroy {
  @Input()
  accordions: Array<AccordionList>;

  @Input() params: Observable<Params>;
  expansions: { [key: string]: boolean } = {};
  currentItemId: string;
  private _onDestroy = new Subject<void>();

  constructor(private _router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  nonChild(category: AccordionList): boolean {
    return category.children === undefined;
  }
}
