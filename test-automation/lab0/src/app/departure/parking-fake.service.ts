import { Injectable } from '@angular/core';

@Injectable()
export class ParkingFakeService {

  constructor(private pricePerHourResponse: number, private saveAccessResponse: boolean) { }

  getPricePerHour(isBike: boolean){
    this.pricePerHourResponse;
   }

  saveAccess(vehiclePlate:string, accessDate: Date):boolean{
    return this.saveAccessResponse;
  }

}
