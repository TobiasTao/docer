import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

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
      contentPath: '/docs/electron/README.md',
    },
  ];
  constructor() {}

  ngOnInit() {}

  close() {
    console.log('close');
  }
}
