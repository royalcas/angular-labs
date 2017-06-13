import { Component, OnInit } from '@angular/core';

import { VehicleService } from '../providers/vehicle.service';

@Component({
  selector: 'app-departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.scss'],
  providers: [VehicleService]
})
export class DepartureComponent implements OnInit {
  vehiclePlate: string;
  accessDate: Date;
  hours: number;
  error: string;
  price:number;
  constructor(private vehicleService: VehicleService) {
    this.accessDate = new Date();
   }

  ngOnInit() {
  }

  calculatePrice(){
    var isBike = this.vehicleService.isBikePlate(this.vehiclePlate);
    
    this.price = this.hours*this.vehicleService.getPricePerHour(isBike);
  }

}
