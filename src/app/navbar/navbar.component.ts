import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logout (){
    localStorage.removeItem('token')
    this._Router.navigateByUrl("/signin")

  }
  constructor (public _Router:Router ) { }

  ngOnInit(): void {
  }

}
