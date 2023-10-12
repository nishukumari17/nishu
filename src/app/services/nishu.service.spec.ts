import { TestBed } from '@angular/core/testing';

import { NishuService } from './nishu.service';

describe('NishuService', () => {
  let service: NishuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NishuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
