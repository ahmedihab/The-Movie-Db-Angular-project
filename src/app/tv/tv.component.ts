import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  ImgUrl:string = "https://image.tmdb.org/t/p/original";
  AllLatset:any [] = [] ;
  constructor(_MovieService:MovieService) {
    _MovieService.GetTerndingTv().subscribe((data)=>{
      this.AllLatset = data.results
    },
    (err)=>{
      console.log(err)})
   }

  ngOnInit(): void {
  }

}
