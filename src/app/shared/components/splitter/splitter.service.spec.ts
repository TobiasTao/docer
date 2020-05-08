import { TestBed } from '@angular/core/testing';

import { SplitterService } from './splitter.service';

describe('SplitterService', () => {
  let service: SplitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
