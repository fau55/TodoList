import { TestBed } from '@angular/core/testing';

import { CountryTimezoneService } from './country-timezone.service';

describe('CountryTimezoneService', () => {
  let service: CountryTimezoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryTimezoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
