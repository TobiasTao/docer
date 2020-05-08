import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitterBarComponent } from './splitter-bar.component';

describe('SplitterBarComponent', () => {
  let component: SplitterBarComponent;
  let fixture: ComponentFixture<SplitterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SplitterBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
