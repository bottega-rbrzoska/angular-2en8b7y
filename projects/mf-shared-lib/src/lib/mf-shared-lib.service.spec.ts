import { TestBed } from '@angular/core/testing';

import { MfSharedLibService } from './mf-shared-lib.service';

describe('MfSharedLibService', () => {
  let service: MfSharedLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfSharedLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
