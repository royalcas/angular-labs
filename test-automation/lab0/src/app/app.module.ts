import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdNativeDateModule } from '@angular/material';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DepartureComponent } from './departure/departure.component';
import { AccessComponent } from './access/access.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DepartureComponent,
    AccessComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule, 
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBPJUEPIUgLorlOu_TcnyMEv-joD5UbEMU",
      authDomain: "testproject-9f19d.firebaseapp.com",
      databaseURL: "https://testproject-9f19d.firebaseio.com",
      projectId: "testproject-9f19d",
      storageBucket: "testproject-9f19d.appspot.com",
      messagingSenderId: "1053593554820"
    }, 'my-app-name'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
        path: 'access',
        component: AccessComponent
      },
      {
        path: 'departure',
        component: DepartureComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]),
    HttpModule, 
    MaterialModule,
    MdNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
