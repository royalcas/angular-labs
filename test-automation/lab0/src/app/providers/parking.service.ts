import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';


@Injectable()
export class ParkingService {
   items: FirebaseListObservable<any>;

  constructor(private afdb: AngularFireDatabase) {
    this.items = this.afdb.list('/parking')
   }

   getPricePerHour(isBike: boolean){
     if(!isBike)
      return 5000;
    return 1000;
   }

  saveAccess(vehiclePlate:string, accessDate: Date):boolean{
    var item = { vehiclePlate: vehiclePlate, accessDate: accessDate };
    console.log(item);
    console.log(this.items);
    this.items.push(item);
    return true;
  }

}
