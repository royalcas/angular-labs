import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../providers/parking.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'],
  providers: [ParkingService]
})
export class AccessComponent implements OnInit {
  vehiclePlate: string;
  accessDate: Date;
  hours: number;
  error: string;

  constructor(private parkingService : ParkingService) { }

  ngOnInit() {
    this.accessDate = new Date();
    this.hours = new Date().getHours();

  }

  saveAccess(){
    this.accessDate.setHours(this.accessDate.getHours() + this.hours);

    console.log(this.accessDate);
    var response = this.parkingService.saveAccess(this.vehiclePlate, this.accessDate);
    if(!response){
      this.error = "We had problems trying to save this vehicle access, please try again";
    }

  }

  onSubmit(){

  }

}
