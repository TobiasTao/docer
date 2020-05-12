import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  tabActiveId = 'tab2';
  tabItems = [
    {
      id: 'tab1',
      title: 'Tab1',
      content: `这是Tab1的内容`,
    },
    {
      id: 'tab2',
      title: 'Tab2',
      content: `这是Tab2的内容`,
    },
    {
      id: 'tab3',
      title: 'Tab3',
      content: `这是Tab3的内容`,
    },
  ];
  constructor() {}

  ngOnInit() {}

  close() {
    console.log('close');
  }
}
