import { Component, OnInit, NgZone } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  otp:string="";
 
  phone: any;
  reCaptchaVerifier!: any;

  constructor(private router: Router, private ngZone:NgZone) { }

  ngOnInit(): void {
  }
  login() {
   firebase.initializeApp(environment.firebase)
  this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
     'recaptcha-container',
     {
       size:'invisible',
     }
   )
   console.log(this.reCaptchaVerifier)
   firebase
   .auth()
   .signInWithPhoneNumber(this.phone, this.reCaptchaVerifier)
   .then((confirmationResult) => {
     localStorage.setItem(
       'verificationId',
       JSON.stringify(confirmationResult.verificationId)
     );
     this.ngZone.run(() => {
       this.router.navigate(['/Home']);
     });
   })
   .catch((error) => {
     console.log(error.message);
    
     });
} 
    
}
