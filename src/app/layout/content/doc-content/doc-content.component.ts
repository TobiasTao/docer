import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doc-content',
  templateUrl: './doc-content.component.html',
  styleUrls: ['./doc-content.component.scss'],
})
export class DocContentComponent implements OnInit {
  @Input() docText: string;

  constructor() {}

  ngOnInit(): void {}
}
