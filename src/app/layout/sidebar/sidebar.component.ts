import { Component, OnInit } from '@angular/core';
import { AccordionList } from './side-list/side-list.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  accordions: Array<AccordionList> = [
    {
      id: '1',
      title: 'Dynamic Title 1',
      children: [
        {
          id: '1',
          title: 'Dynamic sub Title 1',
          children: [
            { id: '1', title: 'Dynamic sub sub Title 1', items: ['Dynamic items 1'] },
            { id: '1', title: 'Dynamic sub sub Title 2', items: ['Dynamic items 1'] },
            { id: '1', title: 'Dynamic sub sub Title 3', items: ['Dynamic items 1'] },
          ],
        },
        { id: '1', title: 'Dynamic sub Title 2', items: ['Dynamic items 1'] },
        { id: '1', title: 'Dynamic sub Title 3', items: ['Dynamic content 1'] },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
