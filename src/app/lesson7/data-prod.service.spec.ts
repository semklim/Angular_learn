import { TestBed } from '@angular/core/testing';

import { DataProdService } from './data-prod.service';

describe('DataProdService', () => {
  let service: DataProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
