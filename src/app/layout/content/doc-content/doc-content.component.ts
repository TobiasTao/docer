import { DomSanitizer } from '@angular/platform-browser';
import { ContentService } from '../../../core/services/contents/content.service';
import { Component, OnInit, Input } from '@angular/core';
import * as MarkdownIt from 'markdown-it';
import * as Token from 'markdown-it/lib/token';
import * as Renderer from 'markdown-it/lib/renderer';

export interface TocItem {
  level: number;
  content: string;
}

@Component({
  selector: 'app-doc-content',
  templateUrl: './doc-content.component.html',
  styleUrls: ['./doc-content.component.scss'],
})
export class DocContentComponent implements OnInit {
  @Input() docPath: string;

  docText: string;

  docMD: string;

  docTokens: Token[] = [];
  tocItems: TocItem[] = [];

  constructor(public contentService: ContentService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.contentService.getDoc(this.docPath).then((data) => {
      this.docText = data;
      let mdi = new MarkdownIt();
      this.docTokens = mdi.parse(this.docText, null);
      this.getTOC();
      let mdRenderer = new Renderer();
      this.docMD = mdRenderer.render(this.docTokens, {}, null);
    });
  }

  getTOC() {
    let flag = false;
    let level = 1;
    let prev: Token = null;
    this.docTokens.forEach((ele) => {
      if (ele.type === 'heading_open') {
        flag = true;
        level = ele.markup.length;
        prev = ele;
      } else if (flag && ele.type === 'inline') {
        this.tocItems.push({ level, content: ele.content });

        prev.attrPush(['id', ele.content]);
      } else if (ele.type === 'heading_close') {
        flag = false;
      }
    });
    // console.log(this.docTokens);
  }
}
