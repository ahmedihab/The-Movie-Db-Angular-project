import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (private _HttpClient:HttpClient) {}

  Register(registerData):Observable<any>
  {
   return this._HttpClient.post("http://routeegypt.herokuapp.com/signup",registerData)
  }

  Singin(SiginData):Observable<any>
  {
    return this._HttpClient.post("http://routeegypt.herokuapp.com/signin",SiginData)

  }
}
