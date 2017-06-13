import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { LoginForm } from '../domain/login-form';
import { SessionService } from '../providers/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [SessionService]
})
export class LoginComponent implements OnInit {
  model = new LoginForm('', '');
  error: string;

  constructor(private sessionService: SessionService, private af: AngularFireAuth, private router: Router) { }
  
  onSubmit(formData) {
    console.log(formData);
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password)
        .then(
          (success) => {
          console.log(success);
          if(!success.message){
            this.sessionService.saveUserSessionData(success);
          }
          else{
            this.error = success.message;
          }
          this.router.navigate(['/']);
        }).catch(
          (err) => {
          console.log(err);
          this.error = err.message;
      })
    }
  }

  ngOnInit() {
  }

}
