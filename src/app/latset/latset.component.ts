import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'
@Component({
  selector: 'app-latset',
  templateUrl: './latset.component.html',
  styleUrls: ['./latset.component.css']
})
export class LatsetComponent implements OnInit {
  ImgUrl:string = "https://image.tmdb.org/t/p/original";
  AllLatset:any [] = [] ;

  constructor(_MovieService:MovieService) {
    _MovieService.GetLatsetMovie().subscribe((data)=>{
      this.AllLatset = data.results
    },
    (err)=>{
      console.log(err)})
  }

  ngOnInit(): void {
  }

}
