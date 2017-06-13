import { Injectable } from '@angular/core';

@Injectable()
export class VehicleService {

  constructor() { }

  isBikePlate(vehiclePlate:string){
    var lastDigit =   vehiclePlate.slice(-1);
    if (lastDigit.match(/[a-z]/i)){
      return true;
    }
    return false;
  }

  getPricePerHour(isBike: boolean){
     if(!isBike)
      return 5000;
    return 1000;
   }

}
