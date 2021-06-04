import { TestBed } from '@angular/core/testing';

import { SpeedUnitService } from './speed-unit.service';

describe('SpeedUnitService', () => {
  let service: SpeedUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeedUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
