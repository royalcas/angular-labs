import { Injectable } from '@angular/core';

@Injectable()
export class VehicleFakeServiceService {

  constructor() { }

  isBikePlate(vehiclePlate:string){
    return false;
  }

  getPricePerHour(isBike: boolean){
     return 10;
   }

}
