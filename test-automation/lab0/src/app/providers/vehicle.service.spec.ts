import { TestBed, inject } from '@angular/core/testing';

import { VehicleService } from './vehicle.service';

describe('VehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleService]
    });
  });

  it('should be created', inject([VehicleService], (service: VehicleService) => {
    expect(service).toBeTruthy();
  }));
  it('Check a Bike Plate',inject([VehicleService], (service: VehicleService) => {
    var isBike = service.isBikePlate("RUX57C");
    expect(isBike).toBe(true);
  }));
  it('Check a Car Plate',inject([VehicleService], (service: VehicleService) => {
    var isBike = service.isBikePlate("RUX577");
    expect(isBike).toBe(false);
  }));
});
