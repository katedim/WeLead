import { TestBed } from '@angular/core/testing';

import { PublicerService } from './publicer.service';

describe('PublicerService', () => {
  let service: PublicerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
