import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators }from '@angular/forms'
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myform:FormGroup = new FormGroup({
    'first_name': new FormControl(null, [Validators.required,Validators.minLength(3), Validators.maxLength(16)]),
    'last_name': new FormControl(null, [Validators.required,Validators.minLength(3), Validators.maxLength(16)]),
    'email':new FormControl (null,[Validators.required,Validators.email]),
    'age':new FormControl (null,[Validators.required]),
    'password':new FormControl (null,Validators.required)
  })

  getData(){

    this._AuthService.Register(this.myform.value).subscribe((data)=>{
      console.log(data)
      this._Router.navigateByUrl("/signin")
    },
    (err)=>{console.log(err)})

      // console.log(this.myform.value)

  }
  constructor( private _AuthService:AuthService ,private _Router:Router) { }

  ngOnInit(): void {
  }

}
