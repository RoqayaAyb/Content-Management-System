import { TestBed } from '@angular/core/testing';

import { CmsLibraryService } from './cms-library.service';

describe('CmsLibraryService', () => {
  let service: CmsLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmsLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
