import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {
  ImgUrl:string = "https://image.tmdb.org/t/p/original";
  AllLatset:any [] = [] ;
  constructor(_MovieService:MovieService) {
    _MovieService.GetNow_playingMovie().subscribe((data)=>{
      this.AllLatset = data.results
    },
    (err)=>{
      console.log(err)})
  }

  ngOnInit(): void {
  }

}
