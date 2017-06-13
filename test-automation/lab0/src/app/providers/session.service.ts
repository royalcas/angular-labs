import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  constructor() { }

  saveUserSessionData(sessionData: any){
    localStorage.userSessionData = sessionData;
  }

  isGuestUser(sessionData: any){
    localStorage.userSessionData;
  }

  clearUserSessionData(sessionData: any){
    localStorage.userSessionData = null;
  }

}
