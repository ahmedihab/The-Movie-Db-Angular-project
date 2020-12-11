import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  ImgUrl:string = "https://image.tmdb.org/t/p/original";
  AllLatset:any [] = [] ;
  constructor(_MovieService:MovieService)  {
    _MovieService.GetTop_ratedMovie().subscribe((data)=>{
      this.AllLatset = data.results
    },
    (err)=>{
      console.log(err)})
   }

  ngOnInit(): void {
  }

}
