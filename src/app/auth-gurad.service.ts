import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuradService implements CanActivate {

  canActivate ( ):boolean|Observable<boolean>{
    const token = localStorage.getItem('token');
    if(token){
      return true
    }
    else{
      this._Router.navigateByUrl('/registr')
      return false
    }
  }
  constructor(public  _Router:Router) { }
}
