import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  from, Observable } from 'rxjs';
import Swal from 'sweetalert2/src/sweetalert2.js'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userID!: string;
  userEmail!: string | null;
  errorMsg: string = '';
  phoneNo:string=""
constructor(private auth: AngularFireAuth) {

  
 }



}