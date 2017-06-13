import { TestBed, inject } from '@angular/core/testing';

import { VehicleFakeServiceService } from './vehicle-fake-service.service';

describe('VehicleFakeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleFakeServiceService]
    });
  });

  it('should be created', inject([VehicleFakeServiceService], (service: VehicleFakeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
