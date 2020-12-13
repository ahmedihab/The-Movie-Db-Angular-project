import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators }from '@angular/forms'
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myform:FormGroup = new FormGroup({
    'email':new FormControl (null,[Validators.required,Validators.email]),
    'password':new FormControl (null,Validators.required)
  })


  getData(){

    this._AuthService.Singin(this.myform.value).subscribe((data)=>{
      localStorage.setItem('token',data.token)
      this._Router.navigateByUrl("/home")
    },
    (err)=>{console.log(err)})

      // console.log(this.myform.value)

  }
  constructor( private _AuthService:AuthService ,private _Router:Router ,private _ToastrService:ToastrService) { }
   showSuccess() {
    this._ToastrService.success( 'Welcome!','Login Success!');
  }
  ngOnInit(): void {
  }

}
