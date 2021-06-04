import { TestBed } from '@angular/core/testing';

import { TemperatureUnitService } from './temperature-unit.service';

describe('TemperatureUnitService', () => {
  let service: TemperatureUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperatureUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
