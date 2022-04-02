import { TestBed } from '@angular/core/testing';

import { CountryAndStateDbService } from './country-and-state-db.service';

describe('CountryAndStateDbService', () => {
  let service: CountryAndStateDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryAndStateDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
