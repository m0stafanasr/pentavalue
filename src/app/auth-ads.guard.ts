import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2/src/sweetalert2.js'
@Injectable({
  providedIn: 'root'
})
export class AuthAdsGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(localStorage.getItem('verificationId'))
      {
        return true;
      }
      else
      {
        //we won't need this cause he will never see any page without login first
        Swal.fire({
          icon: 'error',
          title: 'please LOGIN first so you can Join our world..',
        
        })
      //  alert ('please LOGIN first so you can Join our world..');
        this.router.navigate(['']);
        return false
      }
    
  }
}
  

