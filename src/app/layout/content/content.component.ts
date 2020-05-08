import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  tab1activeID = 'tab2';
  tab2activeID = 'tab3';
  constructor() {}

  ngOnInit() {}
  activeTabChange(id) {
    console.log(id);
  }
}
