import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  ImgUrl:string = "https://image.tmdb.org/t/p/original";
  AllLatset:any [] = [] ;
  constructor(_MovieService:MovieService)  {
    _MovieService.GetLupcomingMovie().subscribe((data)=>{
      this.AllLatset = data.results
    },
    (err)=>{
      console.log(err)})
  }

  ngOnInit(): void {
  }

}
