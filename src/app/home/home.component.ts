import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MovieService} from '../movie.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ImgUrl:string = "https://image.tmdb.org/t/p/original";
  trendingAll:any [] = [] ;
  trendingTv:any [] = [] ;
  constructor(public _MovieService:MovieService, _Router:Router) {
    const token = localStorage.getItem('token');
    if(token == null){
        _Router.navigateByUrl('/signin')
    }

      _MovieService.GetTerndingAll().subscribe((data)=>{
        this.trendingAll = data.results
      },
      (err)=>{
        console.log(err)})

        _MovieService.GetTerndingTv().subscribe((data)=>{
          this.trendingTv = data.results
        },
        (err)=>{
          console.log(err)})
   }

  ngOnInit(): void {


}
}
