import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth) {

  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.EmailAuthProvider());
  }
}
