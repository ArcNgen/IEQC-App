import { TestBed } from '@angular/core/testing';

import { QcTestDataService } from './qc-test-data.service';

describe('QcTestDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QcTestDataService = TestBed.get(QcTestDataService);
    expect(service).toBeTruthy();
  });
});
