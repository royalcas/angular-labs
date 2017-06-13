import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VehicleFakeServiceService } from './vehicle-fake-service.service';
import { ParkingFakeService } from './parking-fake.service';

import { VehicleService } from '../providers/vehicle.service';

import { DepartureComponent } from './departure.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MdNativeDateModule } from '@angular/material';

describe('DepartureComponent', () => {
  let component: DepartureComponent;
  let fixture: ComponentFixture<DepartureComponent>;
  let vehicleService: VehicleService;
  let vehicleMock = new VehicleFakeServiceService();

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MaterialModule, FormsModule, MdNativeDateModule],
      declarations: [ DepartureComponent ],
      providers: [
        { provide:VehicleService, useVal: vehicleMock}        
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    vehicleService = fixture.debugElement.injector.get(VehicleService);
    component.hours = 3;
    component.vehiclePlate = "ABC123";
    var pricePerHour  = 10;
    spyOn(vehicleService, 'getPricePerHour').and.returnValue(pricePerHour); 
    spyOn(vehicleService, 'isBikePlate').and.returnValue(false); 
    component.calculatePrice();
    expect(component.price).toBe(3000);
  });
});
