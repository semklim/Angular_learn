import { TestBed } from '@angular/core/testing';

import { SaveIdProductService } from './save-id-pruct.service';

describe('SaveIdPructService', () => {
  let service: SaveIdProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveIdProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
